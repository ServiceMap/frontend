import type { WindowEnvType } from "@/shared/types/index.ts";

declare global {
  interface Window {
    env: WindowEnvType;
  }
}

export {};
