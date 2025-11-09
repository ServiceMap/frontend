"use client";

import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select";

type Theme = "light" | "dark" | "orange";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "light",
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark", "orange");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="tw:w-40">
      <Select value={theme} onValueChange={(v: Theme) => setTheme(v)}>
        <SelectTrigger>
          <SelectValue placeholder="Select theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">🌞 Light</SelectItem>
          <SelectItem value="dark">🌚 Dark</SelectItem>
          <SelectItem value="orange">🍊 Orange</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
