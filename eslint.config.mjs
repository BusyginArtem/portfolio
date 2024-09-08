import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends("next/core-web-vitals"),
  { ignores: [".next", "node_modules"] },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "@next/next/no-duplicate-head": "off",
      "react/no-unescaped-entities": 0,
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [
        1,
        {
          extensions: [".js", ".jsx"],
        },
      ],

      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  {
    files: ["**/*.tsx", "**/*.ts"],
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^react"],
            ["^next?\\w"],
            ["^framer-motion?\\w"],
            ["^@?\\w"],
            ["^(@|components)(/.*|$)"],
            ["^\\u0000"],
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            ["^.+\\.?(css)$"],
          ],
        },
      ],
    },
  },
];
