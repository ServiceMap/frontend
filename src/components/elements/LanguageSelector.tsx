import React from "react";
import { useTranslation } from "react-i18next";

import { type Locale, LocaleNames } from "@/config/i18n";

export const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as Locale;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select value={currentLang} onChange={handleChange}>
      {Object.entries(LocaleNames).map(([code, label]) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  );
};
