import { useContext } from "react";

import { ThemeContext } from "@/shared/theme";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context) return context;

  throw new Error("useTheme must be used within the theme-provider");
};
