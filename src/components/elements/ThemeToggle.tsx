import { useEffect, useState } from "react";
import { Apple, Moon, Palette, Sun } from "lucide-react";

import { Button } from "@/components/ui/shadcn/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu";
import { cn } from "@/utils/cn.ts";

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark", "orange");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const items = [
    {
      name: "Light",
      value: "light",
      getIcon: (isSelected: boolean) => (
        <Sun
          className={cn("", {
            "tw:fill-primary": isSelected,
          })}
          size={16}
        />
      ),
    },
    {
      name: "Dark",
      value: "dark",
      getIcon: (isSelected: boolean) => (
        <Moon
          className={cn("", {
            "tw:fill-primary": isSelected,
          })}
          size={16}
        />
      ),
    },
    {
      name: "Orange",
      value: "orange",
      getIcon: (isSelected: boolean) => (
        <Apple
          className={cn("", {
            "tw:fill-primary": isSelected,
          })}
          size={16}
        />
      ),
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="tw:cursor-pointer" variant="ghost" size="icon">
          <Palette size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {items.map((i) => (
          <DropdownMenuItem
            className="tw:cursor-pointer"
            key={i.value}
            onClick={() => setTheme(i.value)}
          >
            {i.getIcon(theme === i.value)}
            <span className="tw:ml-2">{i.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { ThemeToggle };
