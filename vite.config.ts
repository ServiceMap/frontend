import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
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
    headers: {
      "Referrer-Policy": "no-referrer",
    },
    port: 5173,
    host: true,
    strictPort: true,
  },
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
      reporter: ["text", "html", "lcov"],
      reportsDirectory: "./coverage",
      include: ["src/**/*.{ts,tsx,js,jsx}"],
      exclude: [
        "src/*.{ts,tsx,js,jsx}",
        "src/**/index.{ts,tsx,js,jsx}",
        "src/tests",
      ],
      thresholds: {
        perFile: true,
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
      clean: true,
      reportOnFailure: true,
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
});
