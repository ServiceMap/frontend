import { configure } from "@testing-library/react";
import { vi } from "vitest";

import "../../public/config.js";
import "@testing-library/jest-dom";

configure({
  asyncUtilTimeout: 5000,
});

vi.mock("@/config/env.ts", async () => {
  const actual =
    await vi.importActual<typeof import("@/config/env.ts")>("@/config/env.ts");

  return {
    ...actual,
    AppConfig: {
      ...actual.AppConfig,
      HIDE_UNIMPLEMENTED_FEATURES: false,
    },
  };
});
