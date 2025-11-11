import type { ROLES } from "@/shared/constants/roles.constants.ts";

export type User = {
  id: string;
  username: string;
  preferredName: string;
  email?: string;
  roles: ROLES[];
};
