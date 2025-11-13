import { ErrorBoundary } from "react-error-boundary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "@/app/layout";
import { AllRoutes } from "@/app/routes/configs";
import { FallbackElement } from "@/app/routes/ui";
import { PAGES_ROUTES } from "@/shared/configs";
import { historyBackOrDefault } from "@/shared/utils";

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
