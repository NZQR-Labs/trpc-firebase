// pages/index.tsx
import type { AppRouter } from "../functions/src/expressExample";
import {createTRPCReact} from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>();
