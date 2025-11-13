import { createContext } from "react";

import type { ThemeMode } from "@/shared/ui/theme-provider/lib";

interface IThemeContextProps {
  theme: ThemeMode;
  changeTheme: (theme: ThemeMode) => void;
}

export const ThemeContext = createContext<IThemeContextProps | null>(null);
