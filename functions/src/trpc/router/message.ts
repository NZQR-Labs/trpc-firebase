import { router, publicProcedure } from "../trpc";
import { db, createMessage } from "../../dummyDb";
import {z} from "zod";

export const messageRouter = router({
  addMessage: publicProcedure.input(z.string()).mutation(({ input }) => {
    const msg = createMessage(input);
    db.messages.push(msg);
  
    return msg;
  }),
  listMessages: publicProcedure.query(() => db.messages),
});
  