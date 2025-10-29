import { useContext } from "react";

import { AuthContext } from "@/contexts/AuthContext.ts";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context) return context;

  throw new Error("useAuth must be used within the AuthProvider");
};
