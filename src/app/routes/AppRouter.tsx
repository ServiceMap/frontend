import { lazy } from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import type { RouteObject } from "react-router";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { t } from "i18next";

import { Layout } from "@/app/layout";
import { ProtectedRoute, RoleBasedRoute } from "@/app/routes/guards";
import { ROLES } from "@/shared/constants/roles.constants.ts";
import { ROUTES } from "@/shared/constants/routes.constants.ts";
import { Button } from "@/shared/ui";
import { historyBackOrDefault } from "@/shared/utils";

const DashboardPage = lazy(() => import("@/pages/dashboard/DashboardPage.tsx"));
const ErrorPage = lazy(() => import("@/pages/error/ErrorPage.tsx"));
const NotFoundPage = lazy(() => import("@/pages/not-found/NotFoundPage.tsx"));
const HomePage = lazy(() => import("@/pages/home/HomePage.tsx"));
const SettingsPage = lazy(() => import("@/pages/settings/SettingsPage.tsx"));
const StripeTestPage = lazy(() => import("@/pages/payment/StripeTestPage.tsx"));

const fallbackRender = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div role="alert">
      <p>{t("something_went_wrong")}</p>
      <pre className="tw:p-4 tw:text-red-800">
        {(error as { message: string }).message}
      </pre>

      <Button onClick={resetErrorBoundary}>{t("go_back_btn")}</Button>
    </div>
  );
};

const allRoutes: RouteObject[] = [
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

const appRouter = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: (
      <ErrorBoundary
        fallbackRender={fallbackRender}
        onReset={() => historyBackOrDefault(ROUTES.ROOT)}
        onError={(error, info) => {
          console.error(error, info);
        }}
      >
        <Layout />
      </ErrorBoundary>
    ),
    children: allRoutes,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={appRouter} />;
};
