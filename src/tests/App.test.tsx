import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "@/App";
import { AuthProvider } from "@/providers/AuthProvider.tsx";

describe("App", () => {
  it("renders Welcome to ServiceMap heading", async () => {
    render(
      <AuthProvider>
        <App />
      </AuthProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText(/Welcome to ServiceMap/i)).toBeInTheDocument();
    });
  });
});
