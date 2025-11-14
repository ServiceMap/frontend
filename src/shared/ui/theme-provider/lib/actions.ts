import { THEME_LOCAL_STORAGE_KEY } from "@/shared/ui/theme-provider/config";
import { isThemeMode, type ThemeMode } from "@/shared/ui/theme-provider/lib";

export const getStoredTheme = (): ThemeMode | null => {
  const stored = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);
  return isThemeMode(stored) ? stored : null;
};

export const setStoredTheme = (theme: ThemeMode) =>
  localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
