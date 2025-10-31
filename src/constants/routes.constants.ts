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

export const API_ROUTES = {
  AUTH: {
    BASE: "/auth",
    REALMS: "/auth/realms",
  },
} as const;
