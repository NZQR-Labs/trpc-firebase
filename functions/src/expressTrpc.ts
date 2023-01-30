import * as express from "express";
import * as cors from "cors";
import * as functions from "firebase-functions";
import * as trpcExpress from "@trpc/server/adapters/express";
import { createContext } from "./trpc/context";
import { appRouter } from "./trpc/router/_app";

const app = express();

app.use(cors({ origin: true }));

app.get("/:id", (req, res) => res.send({"data": "get /:id"}));
app.post("/", (req, res) => res.send({"data": "post /"}));
app.put("/:id", (req, res) => res.send({"data": "put /:id"}));
app.delete("/:id", (req, res) => res.send({"data": "delete /:id"}));
app.get("/", (req, res) => res.send({"data": "get /"}));

app.use((req, _res, next) => {
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