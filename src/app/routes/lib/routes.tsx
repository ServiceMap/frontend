import { lazy } from "react";
import type { RouteObject } from "react-router";
import { Navigate } from "react-router-dom";

import { ProtectedRoute, RoleBasedRoute } from "@/app/routes/lib/guards";
import { ROLES } from "@/shared/constants/roles.constants.ts";
import { ROUTES } from "@/shared/constants/routes.constants.ts";

const DashboardPage = lazy(() =>
  import("@/pages/dashboard").then((module) => ({
    default: module.DashboardPage,
  })),
);
const ErrorPage = lazy(() =>
  import("@/pages/error").then((module) => ({
    default: module.ErrorPage,
  })),
);
const NotFoundPage = lazy(() =>
  import("@/pages/not-found").then((module) => ({
    default: module.NotFoundPage,
  })),
);
const HomePage = lazy(() =>
  import("@/pages/home").then((module) => ({
    default: module.HomePage,
  })),
);
const UserSettingsPage = lazy(() =>
  import("@/pages/user-settings").then((module) => ({
    default: module.UserSettingsPage,
  })),
);
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
    path: ROUTES.USER_SETTINGS,
    element: (
      <ProtectedRoute>
        <UserSettingsPage />
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
