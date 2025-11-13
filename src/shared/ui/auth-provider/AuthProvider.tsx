import React from "react";

import { AuthContext } from "@/shared/ui/auth-provider/lib/AuthContext.ts";
import { useAuthProvider } from "@/shared/ui/auth-provider/lib/useAuthProvider.ts";
import { Loader } from "@/shared/ui/loader";

interface IAuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const { isInitiated, ...value } = useAuthProvider();

  if (!isInitiated) return <Loader fullscreen />;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
