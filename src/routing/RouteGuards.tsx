import React from "react";
import { Navigate } from "react-router-dom";

import { Roles } from "@/constants/roles";
import { ROUTES } from "@/constants/routes";
import { useAuth } from "@/hooks/useAuth";

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { authenticated, login } = useAuth();

  if (!authenticated) {
    login();
    return null;
  }

  return <>{children}</>;
};

export const RoleBasedRoute: React.FC<{
  children: React.ReactNode;
  roles: Roles[];
}> = ({ children, roles }) => {
  const { user } = useAuth();
  const hasAccess = user?.roles.some((role) => roles.includes(role));

  return hasAccess ? <>{children}</> : <Navigate to={ROUTES.ERROR} />;
};
