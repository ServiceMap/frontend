import { createRoot } from "react-dom/client";

import { initSentry } from "@/app/config";
import { App } from "@/app/entrypoint/App.tsx";

import "@/app/config/i18n.ts";
import "@/app/config/dayjs.ts";

import "@/app/styles/global.css";
import "@/shared/ui/theme-provider/styles/styles.css";

initSentry();

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(<App />);
