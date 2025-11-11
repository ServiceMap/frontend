import { lazy, StrictMode } from "react";

import { AuthProvider } from "@/app/providers/AuthProvider.tsx";
import { StripeProvider } from "@/app/providers/StripeProvider.tsx";

const AppRouter = lazy(() => import("@/routing/AppRouter.tsx"));

const App = () => {
  return (
    <AuthProvider>
      <StrictMode>
        <StripeProvider>
          <AppRouter />
        </StripeProvider>
      </StrictMode>
    </AuthProvider>
  );
};

export default App;
