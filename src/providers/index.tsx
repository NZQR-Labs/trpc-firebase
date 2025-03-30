import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { useState } from "react";
import { TRPCProvider } from "../../utils/trpc";
import type { AppRouter } from "../../functions/src/root"; 

const API_URL = import.meta.env.VITE_APP_API_URL; 

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: { 
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (typeof window === "undefined") { 
    return makeQueryClient();
  } else { 
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  const url = import.meta.env.MODE === "development" ? `${API_URL}/api-express/trpc` 
    : `${API_URL}/api-express/trpc`;
    
  const queryClient = getQueryClient(); 
  const [trpcClient] = useState(() =>
    createTRPCClient<AppRouter>({
      links: [
        httpBatchLink({
          url: url,
        }),
      ],
    }),
  );
  return <QueryClientProvider client={queryClient}>
    <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
      {children}
    </TRPCProvider>
  </QueryClientProvider>;
};

export default RootProvider;