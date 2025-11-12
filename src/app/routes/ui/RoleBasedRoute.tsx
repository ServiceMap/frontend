import React from "react";
import { Navigate } from "react-router-dom";

import { authService } from "@/shared/auth";
import { ROLES } from "@/shared/constants/roles.constants.ts";
import { ROUTES } from "@/shared/constants/routes.constants.ts";

export const RoleBasedRoute: React.FC<{
  children: React.ReactNode;
  roles: ROLES[];
}> = ({ children, roles }) => {
  const hasAccess = authService.hasRole(roles);
  return hasAccess ? <>{children}</> : <Navigate to={ROUTES.ERROR} />;
};
