import type { ROLES } from "@/shared/constants/roles.constants.ts";

export type AuthUser = {
  id: string;
  username: string;
  preferredName: string;
  email?: string;
  roles: ROLES[];
};
