/* eslint-disable @typescript-eslint/no-unused-vars */
import { router, publicProcedure } from "../trpc";
import { postRouter } from "./post";
import { messageRouter } from "./message";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const appRouter = router({
  post: postRouter,
  message: messageRouter,
  hello: publicProcedure.input(z.string().nullish()).query(({ input, ctx }) => {
    return "Hello from trpc Route!";
    //return `hello ${input ?? ctx.user?.name ?? ""}`;
  }),
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