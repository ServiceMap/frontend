import { useEffect, useEffectEvent, useState } from "react";

import { getStoredTheme, setStoredTheme, ThemeMode } from "@/shared/theme";

export const useAppThemeProvider = () => {
  const [theme, setTheme] = useState<ThemeMode>(ThemeMode.Light);

  const applyTheme = (newTheme: ThemeMode) => {
    Object.values(ThemeMode).forEach((mode) => {
      document.documentElement.classList.remove(mode);
    });
    document.documentElement.classList.add(newTheme);

    setTheme(newTheme);
  };

  const loadThemeFromLocalStorage = useEffectEvent(() => {
    const currentTheme = getStoredTheme();
    if (!currentTheme) return;

    applyTheme(currentTheme);
  });

  useEffect(() => {
    loadThemeFromLocalStorage();
  }, []);

  const changeTheme = (newTheme: ThemeMode) => {
    setStoredTheme(newTheme);
    applyTheme(newTheme);
  };

  return { theme, changeTheme };
};
