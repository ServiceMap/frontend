import React from "react";

import { useAppThemeProvider } from "@/app/providers/theme-provider/useAppThemeProvider.ts";
import { ThemeContext } from "@/shared/theme";

interface IThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const value = useAppThemeProvider();
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
