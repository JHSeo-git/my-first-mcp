import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import ts from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  {
    ignores: [
      "node_modules/",
      "dist/",
      "build/",
      "prettier.config.cjs",
      ".target/",
    ],
  },

  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ),

  ...ts.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-empty-object-type": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];

export default eslintConfig;
