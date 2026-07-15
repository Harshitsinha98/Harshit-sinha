import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Apostrophes and quotes in JSX copy are readable and valid; this rule
      // is noise for a content-heavy portfolio.
      "react/no-unescaped-entities": "off",
      // Surface as a warning: the flagged effects (mount setup, route-change
      // resets) are intentional and correct patterns.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
]);

export default eslintConfig;
