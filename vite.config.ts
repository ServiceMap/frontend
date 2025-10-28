import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    deps: {
      web: {
        transformCss: true,
        transformAssets: true,
      },
    },
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
  server: {
    headers: {
      "Referrer-Policy": "no-referrer",
    },
    port: 5173,
  },
});
