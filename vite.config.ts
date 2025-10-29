import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    deps: {
      web: {
        transformCss: true,
        transformAssets: true,
      },
    },
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
  },
  server: {
    headers: {
      "Referrer-Policy": "no-referrer",
    },
    port: 5173,
  },
});
