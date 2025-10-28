import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { ErrorPage } from "@/pages/error/ErrorPage.tsx";
import { ProtectedRoute, RoleBasedRoute } from "@/routing/RouteGuards.tsx";
import { Roles } from "@/constants/roles.ts";
import { DashboardPage } from "@/pages/dashboard/DashboardPage.tsx";
import { SettingsPage } from "@/pages/settings/SettingsPage.tsx";
import NotFoundPage from "@/pages/error/NotFoundPage.tsx";
import { HomePage } from "@/pages/home/HomePage.tsx";
import { ROUTES } from "@/constants/routes.ts";

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
