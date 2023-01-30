// pages/index.tsx
import type { AppRouter } from "../functions/src/trpc/router/_app";
import {createTRPCReact} from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>();
