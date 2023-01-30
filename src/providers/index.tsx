import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { trpc } from "../../util/trpc";
import { tap } from "@trpc/server/observable";
import React, { useState } from "react";

const API_URL = import.meta.env.VITE_APP_API_URL; 

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  const url = import.meta.env.MODE === "development" ? `${API_URL}/expressTrpc-crud/trpc` 
    : `${API_URL}/expressTrpc-crud/trpc`;
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        () =>
          ({ op, next }) => {
            console.log("->", op.type, op.path, op.input);
            return next(op).pipe(
              tap({
                next(result) {
                  console.log("<-", op.type, op.path, op.input, ":", result);
                },
              }),
            );
          },
        httpBatchLink({
          url: url,
        }),
      ],
    }),
  );
  return <div>
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  </div>;
};

export default RootProvider;