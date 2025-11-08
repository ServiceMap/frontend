import type { WindowEnvType } from "@/types/env.types.ts";

declare global {
  interface Window {
    env: WindowEnvType;
  }
}

export {};
