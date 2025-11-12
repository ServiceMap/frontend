import React from "react";
import { useTranslation } from "react-i18next";

import {
  i18Config,
  type Locale,
  LocaleNames,
} from "@/shared/configs/i18n.config.ts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui";

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as Locale;

  const handleValueChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <Select
      onValueChange={handleValueChange}
      value={currentLang}
      defaultValue={i18Config.defaultLocale}
    >
      <SelectTrigger className="tw:w-16 tw:cursor-pointer">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(LocaleNames).map(([code]) => (
          <SelectItem key={code} value={code} className="tw:cursor-pointer">
            {code.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
