import { createContext } from "react";

import type { AuthUser } from "@/shared/auth";

interface AuthContextProps {
  isLoggedIn: boolean;
  user?: AuthUser;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
