// i18next  "src/**/*.{js,jsx,ts,tsx}" --config i18next-parser.config.js

export default {
  lineEnding: "auto",
  locales: ["en", "uk"],
  output: "public/locales/$LOCALE/$NAMESPACE.json",
  defaultNamespace: "translation",
  defaultValue: "",
  keepRemoved: false,
  createOldCatalogs: false,
  sort: false,
  verbose: false,
  failOnWarnings: false,
  failOnUpdate: false,
};
