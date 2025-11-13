import { initReactI18next } from "react-i18next";
import dayjs from "dayjs";
import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";

import { AppConfig } from "@/shared/configs";

export const i18Config = {
  defaultLocale: "en",
  locales: ["en", "uk"] as const,
  localeDetection: true,
} as const;

export type Locale = (typeof i18Config.locales)[number];

export const LocaleNames: Record<Locale, string> = {
  en: "English",
  uk: "Українська",
} as const;

i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next)
  .init({
    fallbackLng: i18Config.defaultLocale,
    keySeparator: false,
    debug: AppConfig.IS_DEVELOPMENT && !AppConfig.IS_TEST,
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on("languageChanged", (lng) => {
  const locale = i18Config.locales.includes(lng as Locale)
    ? lng
    : i18Config.defaultLocale;

  dayjs.locale(locale);
});

export { i18n };
