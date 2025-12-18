import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import { defineConfig, globalIgnores } from "eslint/config";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTypescript,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "enumMember",
          format: ["UPPER_CASE"],
        },
      ],
      "@typescript-eslint/no-deprecated": "warn",
      // Disable because official Redux pattern uses ref during render for lazy store initialization
      "react-hooks/refs": "off",

      "complexity": ["error", 10],
      "max-lines-per-function": ["warn", {
        "max": 40,
        "skipBlankLines": true,
        "skipComments": true
      }],
      "max-depth": ["error", 3],
      "no-duplicate-imports": "error",
      "curly": ["error", "all"],
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", "shared/component/ui/**"]),
]);

export default eslintConfig;

