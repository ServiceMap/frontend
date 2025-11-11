import { THEME_LOCAL_STORAGE_KEY, ThemeMode } from "@/shared/theme";

export const isThemeMode = (value: unknown): value is ThemeMode =>
  Object.values(ThemeMode).includes(value as ThemeMode);

export const getStoredTheme = (): ThemeMode | null => {
  const stored = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);
  return isThemeMode(stored) ? stored : null;
};

export const setStoredTheme = (theme: ThemeMode) =>
  localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
