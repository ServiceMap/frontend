import { useEffect, useReducer } from "react";

import { AUTH_EVENT_NAME, authService } from "@/shared/auth";

export const useAuthProvider = () => {
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

  return {
    isInitiated: authService.isInitiated,
    isLoggedIn: authService.isLoggedIn,
    user: authService.user,
    login: authService.login,
    logout: authService.logout,
  };
};
