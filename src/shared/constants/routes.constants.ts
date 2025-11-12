export const ROUTES = {
  ROOT: "/",
  DEFAULT: "*",
  HOME: "/home",
  LOGIN: "/login",
  REGISTER: "/register",
  PROFILE: "/profile",
  USER_SETTINGS: "/user/settings",
  DASHBOARD: "/dashboard",
  PAYMENT: "/stripe-test",
  ERROR: "/error",
  NOT_FOUND: "/404",
} as const;

export const API_ROUTES = {
  AUTH: {
    BASE: "/auth",
    REALMS: "/auth/realms",
  },
} as const;
