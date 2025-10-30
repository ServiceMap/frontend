import React, { lazy, useEffect, useReducer } from "react";

import { AuthContext } from "@/contexts/AuthContext";
import authService, { AUTH_EVENT_NAME } from "@/services/AuthService.ts";

const Loader = lazy(() => import("@/components/ui/Loader"));

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [, forceUpdate] = useReducer((x) => {
    return x < 10 ? ++x : --x;
  }, 0);

  useEffect(() => {
    const rerender = () => forceUpdate();
    authService.addEventListener(AUTH_EVENT_NAME, rerender);

    void authService.init().catch((error) => {
      console.error("AuthProvider init error", error);
    });

    return () => {
      authService.removeEventListener(AUTH_EVENT_NAME, rerender);
    };
  }, []);

  if (!authService.isInitiated) return <Loader />;

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: authService.isLoggedIn,
        user: authService.user,
        login: authService.login,
        logout: authService.logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
