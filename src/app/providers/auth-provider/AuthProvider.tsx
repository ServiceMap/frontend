import React from "react";

import { useAuthProvider } from "@/app/providers/auth-provider/useAuthProvider.ts";
import { AuthContext } from "@/shared/auth";
import { Loader } from "@/shared/ui/loader";

interface IAuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const { isInitiated, ...value } = useAuthProvider();

  if (!isInitiated) return <Loader fullscreen />;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
