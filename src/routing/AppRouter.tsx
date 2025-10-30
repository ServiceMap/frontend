import { lazy } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useRouteError,
} from "react-router-dom";

import { Roles } from "@/constants/roles.ts";
import { ROUTES } from "@/constants/routes.ts";
import { ProtectedRoute, RoleBasedRoute } from "@/routing/RouteGuards.tsx";

const DashboardPage = lazy(() => import("@/pages/dashboard/DashboardPage"));
const ErrorPage = lazy(() => import("@/pages/error/ErrorPage"));
const NotFoundPage = lazy(() => import("@/pages/error/NotFoundPage"));
const HomePage = lazy(() => import("@/pages/home/HomePage"));
const SettingsPage = lazy(() => import("@/pages/settings/SettingsPage"));

const appRouter = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.HOME} />,
      },
      {
        path: ROUTES.HOME,
        element: <HomePage />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: ROUTES.ERROR,
        element: <ErrorPage />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: ROUTES.DASHBOARD,
        element: (
          <ProtectedRoute>
            <RoleBasedRoute
              roles={[Roles.SUPER_ADMIN, Roles.COMPANY_ADMIN, Roles.MASTER]}
            >
              <DashboardPage />
            </RoleBasedRoute>
          </ProtectedRoute>
        ),
        errorElement: <ErrorBoundary />,
      },
      {
        path: ROUTES.SETTINGS,
        element: (
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        ),
        errorElement: <ErrorBoundary />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);

function ErrorBoundary() {
  const error = useRouteError() as { message: string };
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return null;
}

const AppRouter = () => {
  return <RouterProvider router={appRouter} />;
};

export default AppRouter;
