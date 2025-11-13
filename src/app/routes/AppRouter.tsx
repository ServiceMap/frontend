import { ErrorBoundary } from "react-error-boundary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "@/app/layout";
import { AllRoutes } from "@/app/routes/config";
import { FallbackElement } from "@/app/routes/ui";
import { PAGES_ROUTES } from "@/shared/consts";
import { historyBackOrDefault } from "@/shared/lib";

const appRouter = createBrowserRouter([
  {
    path: PAGES_ROUTES.ROOT,
    element: (
      <ErrorBoundary
        fallbackRender={FallbackElement}
        onReset={() => historyBackOrDefault(PAGES_ROUTES.ROOT)}
        onError={(error, info) => {
          console.error(error, info);
        }}
      >
        <Layout />
      </ErrorBoundary>
    ),
    children: AllRoutes,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={appRouter} />;
};
