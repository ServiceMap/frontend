import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/providers/AuthProvider";
import { Roles } from "@/constants/roles";
import { ROUTES } from "@/constants/routes.ts";

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
  const hasAccess = user?.roles.some((r) => roles.includes(r as Roles));

  return hasAccess ? <>{children}</> : <Navigate to={ROUTES.ERROR} />;
};
