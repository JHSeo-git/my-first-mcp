/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  printWidth: 100,
  tabWidth: 2,
  trailingComma: "es5",
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-packagejson",
  ],
  importOrder: [
    "^(node:/(.*)$)|^(node:$)",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/types/(.*)$",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/styles/(.*)$",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
};
