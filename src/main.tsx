import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "@/App";
import { initSentry } from "@/external/sentry.ts";
import { AuthProvider } from "@/providers/AuthProvider.tsx";
import { StripeProvider } from "@/providers/StripeProvider.tsx";

import "@/config/i18n.config.ts";
import "@/config/dayjs.config.ts";

import "@/styles/index.css";

initSentry();

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <StrictMode>
      <StripeProvider>
        <App />
      </StripeProvider>
    </StrictMode>
  </AuthProvider>,
);
