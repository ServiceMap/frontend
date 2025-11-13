// TODO add page configs (routes) as a classes instead of constants because it's more flexible

export const PAGES_ROUTES = {
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
