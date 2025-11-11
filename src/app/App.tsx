import { StrictMode } from "react";

import { AuthProvider, StripeProvider, ThemeProvider } from "@/app/providers";
import { AppRouter } from "@/app/routes";

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

export default App;
