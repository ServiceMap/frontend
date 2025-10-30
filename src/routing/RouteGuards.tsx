import React from "react";
import { Navigate } from "react-router-dom";

import { ROLES } from "@/constants/roles.ts";
import { ROUTES } from "@/constants/routes";
import authService from "@/services/AuthService.ts";

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  if (!authService.isLoggedIn) {
    void authService.login();
    return null;
  }

  return <>{children}</>;
};

export const RoleBasedRoute: React.FC<{
  children: React.ReactNode;
  roles: ROLES[];
}> = ({ children, roles }) => {
  const hasAccess = authService.hasRole(roles);
  return hasAccess ? <>{children}</> : <Navigate to={ROUTES.ERROR} />;
};
