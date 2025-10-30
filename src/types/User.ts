import type { Roles } from "@/constants/roles.ts";

export type User = {
  id: string;
  username: string;
  preferredName: string;
  email?: string;
  roles: Roles[];
};
