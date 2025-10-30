import { createContext } from "react";

import type { User } from "@/types/User.ts";

interface AuthContextProps {
  isLoggedIn: boolean;
  user?: User;
  login: () => Promise<void> | undefined;
  logout: () => Promise<void> | undefined;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
