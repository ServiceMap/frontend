import { createRoot } from "react-dom/client";

import { App } from "@/app/App.tsx";
import { initSentry } from "@/shared/configs/external/sentry.ts";

import "@/shared/configs/i18n.config.ts";
import "@/shared/configs/dayjs.config.ts";

import "@/app/styles/global.css";

initSentry();

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(<App />);
