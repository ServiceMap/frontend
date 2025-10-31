import { lazy } from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import { ROLES } from "@/constants/roles.constants.ts";
import { ROUTES } from "@/constants/routes.constants.ts";
import { ProtectedRoute, RoleBasedRoute } from "@/routing/RouteGuards.tsx";

const DashboardPage = lazy(() => import("@/pages/dashboard/DashboardPage"));
const ErrorPage = lazy(() => import("@/pages/error/ErrorPage"));
const NotFoundPage = lazy(() => import("@/pages/error/NotFoundPage"));
const HomePage = lazy(() => import("@/pages/home/HomePage"));
const SettingsPage = lazy(() => import("@/pages/settings/SettingsPage"));

const fallbackRender = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>
        {(error as { message: string }).message}
      </pre>
      <button onClick={resetErrorBoundary}>Go back</button>
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
        <Outlet />
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
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={appRouter} />;
};

export default AppRouter;
