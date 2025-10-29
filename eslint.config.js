import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import prettierPlugin from "eslint-plugin-prettier";

export default defineConfig([
  globalIgnores(["dist", "node_modules", "build"]),

  // Base configurations (each one spread into the array)
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,

  {
    files: ["**/*.{ts,tsx,js,jsx}"],

    settings: {
      react: { version: "detect" },
    },

    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.es2022,
      },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@typescript-eslint": tseslint.plugin,
      prettier: prettierPlugin,
    },

    rules: {
      "prettier/prettier": "error",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react-hooks/exhaustive-deps": "error",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-console": "warn",
    },
  },
]);
