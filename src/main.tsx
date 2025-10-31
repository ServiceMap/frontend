import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "@/App";
import { AuthProvider } from "@/providers/AuthProvider.tsx";

import "@/config/i18n.ts";
import "@/config/dayjs.ts";

import "@/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AuthProvider>,
);
