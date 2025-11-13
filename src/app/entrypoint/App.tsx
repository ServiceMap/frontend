import { StrictMode } from "react";

import { StripeProvider } from "@/app/providers";
import { AppRouter } from "@/app/routes";
import { ThemeProvider } from "@/shared/ui";
import { AuthProvider } from "@/shared/ui/auth-provider";

export const App = () => {
  return (
    <AuthProvider>
      <StrictMode>
        <StripeProvider>
          <ThemeProvider>
            <AppRouter />
          </ThemeProvider>
        </StripeProvider>
      </StrictMode>
    </AuthProvider>
  );
};
