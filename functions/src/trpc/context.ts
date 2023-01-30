import { inferAsyncReturnType } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";

export const createContext = ({
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
  
export type Context = inferAsyncReturnType<typeof createContext>;
