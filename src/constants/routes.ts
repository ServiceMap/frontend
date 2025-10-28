import type { ValueOf } from "@/utils/type.utils.ts";

export const ROUTES = {
  ROOT: "/",
  HOME: "/home",
  LOGIN: "/login",
  REGISTER: "/register",
  PROFILE: "/profile",
  SETTINGS: "/settings",
  DASHBOARD: "/dashboard",
  ERROR: "/error",
  NOT_FOUND: "/404",
} as const;

export type ROUTES = ValueOf<typeof ROUTES>;
