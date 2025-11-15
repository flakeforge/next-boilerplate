import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import readableTailwind from "eslint-plugin-readable-tailwind";

const compat = new FlatCompat({
  baseDirectory: fileURLToPath(new URL(".", import.meta.url)),
});

const nextConfigs = compat.extends("next/core-web-vitals");

export default [
  ...nextConfigs,
  {
    plugins: { "readable-tailwind": readableTailwind },
    rules: {
      "readable-tailwind/no-duplicate-classes": ["error"],
      "readable-tailwind/no-unnecessary-whitespace": ["error"],
      "readable-tailwind/multiline": [
        "error",
        { printWidth: 120, preferSingleLine: true },
      ],
      "readable-tailwind/sort-classes": [
        "error",
        { entryPoint: "src/shared/styles/globals.css" },
      ],
    },
  },
];
