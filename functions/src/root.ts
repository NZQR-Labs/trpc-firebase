import { postRouter } from "./routers/post"; 
import { createCallerFactory, createTRPCRouter , createContext } from "./trpc";
import * as _express from "express";
import * as cors from "cors";
import * as functions from "firebase-functions";
import * as trpcExpress from "@trpc/server/adapters/express";

export const appRouter = createTRPCRouter({
  post: postRouter,
});
 
export type AppRouter = typeof appRouter; 
export const createCaller = createCallerFactory(appRouter);

const app = _express(); 

app.use(cors({ origin: true }));  
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
 
exports.express = functions.https.onRequest(app);