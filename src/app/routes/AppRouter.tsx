import { ErrorBoundary } from "react-error-boundary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "@/app/layout";
import { AllRoutes } from "@/app/routes/lib";
import { FallbackElement } from "@/app/routes/ui";
import { ROUTES } from "@/shared/constants/routes.constants.ts";
import { historyBackOrDefault } from "@/shared/utils";

const appRouter = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: (
      <ErrorBoundary
        fallbackRender={FallbackElement}
        onReset={() => historyBackOrDefault(ROUTES.ROOT)}
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
