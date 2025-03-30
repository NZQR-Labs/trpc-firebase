import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  getPost: publicProcedure
    .input(z.object({ id: z.string().optional() }))
    .query(({ input }) => {
      console.log("input", input);
      return { message: `Post id: ${input.id || "N/A"}` };
    }),
});