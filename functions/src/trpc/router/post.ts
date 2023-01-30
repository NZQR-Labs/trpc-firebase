import { router, publicProcedure, t } from "../trpc";
import { id, db } from "../../dummyDb";
import {z} from "zod";

export const postRouter = router({
  createPost: t.procedure
    .input(z.object({ title: z.string() }))
    .mutation(({ input }) => {
      let tempid = id; 
      const post = {
        id: ++tempid,
        ...input,
      };
      db.posts.push(post);
      return post;
    }),
  listPosts: publicProcedure.query(() => db.posts),
});