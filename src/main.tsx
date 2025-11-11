import { createRoot } from "react-dom/client";

import App from "@/app/App.tsx";
import { initSentry } from "@/shared/configs/external/sentry.ts";

import "@/shared/configs/i18n.config.ts";
import "@/shared/configs/dayjs.config.ts";

import "@/app/styles/global.css";

initSentry();

createRoot(document.getElementById("root")!).render(<App />);
