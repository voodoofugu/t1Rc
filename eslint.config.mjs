import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    ignores: [
      "node_modules/",
      "dist/",
      "src/scripts/pixi-animate",
      "titans_rc",
    ],
  },
  {
    rules: {
      // убираем обязательный prop-types в jsx
      "react/prop-types": "off",
      // не используемые переменный
      "@typescript-eslint/no-unused-vars": "off",
      // сокращаем "if" до тернарного "&&" в функциях
      "no-unused-expressions": [
        "error",
        { allowShortCircuit: true, allowTernary: true },
      ],
      "@typescript-eslint/no-unused-expressions": [
        "error",
        { allowShortCircuit: true, allowTernary: true },
      ],
      // принудительный импорт React
      "react/react-in-jsx-scope": "off",
    },
  },
];
