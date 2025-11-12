import React from "react";

import { useAppThemeProvider } from "@/app/providers/theme-provider/model";
import { ThemeContext } from "@/shared/theme";

interface IThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const value = useAppThemeProvider();
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { ThemeProvider };
