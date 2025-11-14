import { useTranslation } from "react-i18next";
import { Palette } from "lucide-react";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/shadcn";
import { useThemeContext } from "@/shared/ui/theme-provider";
import { ThemeItems } from "@/shared/ui/theme-selector/lib";

export const ThemeSelector = () => {
  const { t } = useTranslation();
  const { theme, changeTheme } = useThemeContext();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            aria-label="Theme selector"
            className="tw:cursor-pointer"
            variant="ghost"
            size="icon"
          >
            <Palette size={18} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {ThemeItems.map((item) => (
            <DropdownMenuItem
              className="tw:cursor-pointer"
              key={item.value}
              onClick={() => changeTheme(item.value)}
            >
              {item.getIcon(theme === item.value)}
              <span className="tw:ml-2">{t(item.tKey)}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
