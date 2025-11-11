import { lazy } from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { t } from "i18next";

import { ProtectedRoute, RoleBasedRoute } from "@/app/routes/guards";
import { ROLES } from "@/shared/constants/roles.constants.ts";
import { ROUTES } from "@/shared/constants/routes.constants.ts";
import { Layout } from "@/widgets/layout";

const DashboardPage = lazy(() => import("@/pages/dashboard/DashboardPage.tsx"));
const ErrorPage = lazy(() => import("@/pages/error/ErrorPage.tsx"));
const NotFoundPage = lazy(() => import("@/pages/error/NotFoundPage.tsx"));
const HomePage = lazy(() => import("@/pages/home/HomePage.tsx"));
const SettingsPage = lazy(() => import("@/pages/settings/SettingsPage.tsx"));
const StripeTestPage = lazy(() => import("@/pages/payment/StripeTestPage.tsx"));

const fallbackRender = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div role="alert">
      <p>{t("something_went_wrong")}</p>
      <pre style={{ color: "red" }}>
        {(error as { message: string }).message}
      </pre>
      <button onClick={resetErrorBoundary}>{t("go_back_btn")}</button>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: (
      <ErrorBoundary
        fallbackRender={fallbackRender}
        onReset={() =>
          window.history.length > 2
            ? window.history.back()
            : window.location.replace(ROUTES.ROOT)
        }
        onError={(error, info) => {
          console.error(error, info);
        }}
      >
        <Layout />
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.HOME} replace />,
      },
      {
        path: ROUTES.HOME,
        element: <HomePage />,
      },
      {
        path: ROUTES.ERROR,
        element: <ErrorPage />,
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
        path: "/stripe-test",
        element: <StripeTestPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={appRouter} />;
};
