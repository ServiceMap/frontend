import { THEME_LOCAL_STORAGE_KEY } from "@/shared/ui/theme-provider/config";
import type { ThemeMode } from "@/shared/ui/theme-provider/lib";
import { isThemeMode } from "@/shared/ui/theme-provider/lib/isThemeMode.ts";

export const getStoredTheme = (): ThemeMode | null => {
  const stored = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);
  return isThemeMode(stored) ? stored : null;
};

export const setStoredTheme = (theme: ThemeMode) =>
  localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
