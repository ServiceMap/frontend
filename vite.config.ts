import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults, defineConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    deps: {
      web: {
        transformCss: true,
        transformAssets: true,
      },
    },
    coverage: {
      provider: "v8",
      reporter: ["lcov"],
      reportsDirectory: "./coverage",
    },
    reporters: [
      "default",
      ["vitest-sonar-reporter", { outputFile: "sonar-report.xml" }],
      ["junit", { outputFile: "test-report.xml" }],
    ],
    testTimeout: 60000,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
    mockReset: true,
    exclude: [...configDefaults.exclude],
  },
  server: {
    headers: {
      "Referrer-Policy": "no-referrer",
    },
    port: 5173,
    host: true,
    strictPort: true,
    origin: "http://0.0.0.0:5173",
  },
  preview: {
    port: 5173,
    host: true,
    strictPort: true,
  },
});
