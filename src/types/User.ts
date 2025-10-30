import type { Roles } from "../constants/roles.ts";

export interface User {
  id: string;
  username: string;
  preferredName: string;
  email?: string;
  roles: Roles[];
}
