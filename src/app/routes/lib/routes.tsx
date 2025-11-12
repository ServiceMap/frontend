import { lazy } from "react";
import type { RouteObject } from "react-router";
import { Navigate } from "react-router-dom";

import { ProtectedRoute, RoleBasedRoute } from "@/app/routes/lib/guards";
import { ROLES } from "@/shared/constants/roles.constants.ts";
import { ROUTES } from "@/shared/constants/routes.constants.ts";

const DashboardPage = lazy(() => import("@/pages/dashboard/DashboardPage.tsx"));
const ErrorPage = lazy(() => import("@/pages/error/ErrorPage.tsx"));
const NotFoundPage = lazy(() => import("@/pages/not-found/NotFoundPage.tsx"));
const HomePage = lazy(() => import("@/pages/home/HomePage.tsx"));
const SettingsPage = lazy(() => import("@/pages/settings/SettingsPage.tsx"));
const StripeTestPage = lazy(() => import("@/pages/payment/StripeTestPage.tsx"));

export const AllRoutes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to={ROUTES.HOME} replace />,
  },
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTES.DASHBOARD,
    element: (
      <ProtectedRoute>
        <RoleBasedRoute
          roles={[ROLES.SUPER_ADMIN, ROLES.COMPANY_ADMIN, ROLES.MASTER]}
        >
          <DashboardPage />
        </RoleBasedRoute>
      </ProtectedRoute>
    ),
  },
  {
    path: ROUTES.SETTINGS,
    element: (
      <ProtectedRoute>
        <SettingsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: ROUTES.PAYMENT,
    element: <StripeTestPage />,
  },
  {
    path: ROUTES.ERROR,
    element: <ErrorPage />,
  },
  {
    path: ROUTES.DEFAULT,
    element: <NotFoundPage />,
  },
];
