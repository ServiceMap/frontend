import { createContext } from "react";

import type { ThemeMode } from "@/shared/theme";

interface IThemeContextProps {
  theme: ThemeMode;
  changeTheme: (theme: ThemeMode) => void;
}

export const ThemeContext = createContext<IThemeContextProps | null>(null);
