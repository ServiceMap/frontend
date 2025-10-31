import { createContext } from "react";

import type { User } from "@/types/user.types.ts";

interface AuthContextProps {
  isLoggedIn: boolean;
  user?: User;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
