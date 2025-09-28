import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      ecmaVersion: "latest", // Enables latest ECMAScript syntax
      sourceType: "module", // Allows use of import/export
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enables JSX syntax
        },
      },
    },
  },
  pluginReact.configs.flat.recommended,
]);
