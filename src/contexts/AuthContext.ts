import { createContext } from "react";
import { Roles } from "@/constants/roles.ts";

interface AuthContextProps {
  initialized: boolean;
  authenticated: boolean;
  user?: { username: string; roles: Roles[] };
  login: () => Promise<void> | undefined;
  logout: () => Promise<void> | undefined;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
