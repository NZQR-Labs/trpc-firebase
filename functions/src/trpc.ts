import { initTRPC } from "@trpc/server"; 
import * as trpcExpress from "@trpc/server/adapters/express"; 

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  // You can add your authentication logic here
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

type Context = Awaited<ReturnType<typeof createContext>>;
 
export const t = initTRPC.context<Context>().create(); 
export const createTRPCRouter = t.router;  
export const publicProcedure = t.procedure;
export const createCallerFactory = t.createCallerFactory;
