import type { ValueOf } from "@/utils/type.utils.ts";

export const Roles = {
  SUPER_ADMIN: "super_admin",
  COMPANY_ADMIN: "company_admin",
  MASTER: "master",
  USER: "user",
} as const;

export type Roles = ValueOf<typeof Roles>;
