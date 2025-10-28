import type { Roles } from "../constants/roles.ts";

export interface User {
  id: string;
  username: string;
  email?: string;
  roles: Roles[];
}
