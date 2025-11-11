import { Apple, Moon, Palette, Sun } from "lucide-react";

import { type ThemeMode, useTheme } from "@/shared/theme";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/shadcn";
import { cn } from "@/shared/utils";

function ThemeToggle() {
  const { theme, changeTheme } = useTheme();

  const items = [
    {
      name: "Light",
      value: "light",
      getIcon: (isSelected: boolean) => (
        <Sun
          className={cn({
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
          className={cn({
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
          className={cn({
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
            onClick={() => changeTheme(i.value as ThemeMode)}
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
