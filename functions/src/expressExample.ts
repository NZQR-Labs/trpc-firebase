import express = require("express");
import cors = require("cors");
import * as functions from "firebase-functions";
import { TRPCError, inferAsyncReturnType, initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { EventEmitter } from "events";
import { z } from "zod";

const app = express();

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  const getUser = () => {
    return {
      name: "alex",
    };
  };

  return {  
    req,
    res,
    user: getUser(),
  };
};

type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

const router = t.router;
const publicProcedure = t.procedure;

let id = 0;

const ee = new EventEmitter();
const db = {
  posts: [
    {
      id: ++id,
      title: "hello",
    },
  ],
  messages: [createMessage("initial message")],
};
function createMessage(text: string) {
  const msg = {
    id: ++id,
    text,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
  ee.emit("newMessage", msg);
  return msg;
}

const postRouter = router({
  createPost: t.procedure
    .input(z.object({ title: z.string() }))
    .mutation(({ input }) => {
      const post = {
        id: ++id,
        ...input,
      };
      db.posts.push(post);
      return post;
    }),
  listPosts: publicProcedure.query(() => db.posts),
});

const messageRouter = router({
  addMessage: publicProcedure.input(z.string()).mutation(({ input }) => {
    const msg = createMessage(input);
    db.messages.push(msg);

    return msg;
  }),
  listMessages: publicProcedure.query(() => db.messages),
});

// root router to call
const appRouter = router({
  // merge predefined routers
  post: postRouter,
  message: messageRouter,
  // or individual procedures
  hello: publicProcedure.input(z.string().nullish()).query(({ input, ctx }) => {
    return "Hello from trpc Route!";
    //return `hello ${input ?? ctx.user?.name ?? ""}`;
  }),
  // or inline a router
  admin: router({
    secret: publicProcedure.query(({ ctx }) => {
      if (!ctx.user) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }
      if (ctx.user?.name !== "alex") {
        throw new TRPCError({ code: "FORBIDDEN" });
      }
      return {
        secret: "sauce",
      };
    }),
  }),
});

export type AppRouter = typeof appRouter;

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// build multiple CRUD interfaces:
app.get("/:id", (req, res) => res.send({"data": "get /:id"}));
app.post("/", (req, res) => res.send({"data": "post /"}));
app.put("/:id", (req, res) => res.send({"data": "put /:id"}));
app.delete("/:id", (req, res) => res.send({"data": "delete /:id"}));
app.get("/", (req, res) => res.send({"data": "get /"}));

app.use((req, _res, next) => {
  // request logger
  console.log("⬅️ ", req.method, req.path, req.body ?? req.query);

  next();
});

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);
app.get("/", (_req, res) => res.send("hello"));

// Expose Express API as a single Cloud Function:
exports.crud = functions.https.onRequest(app);