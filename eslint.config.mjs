import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      react: pluginReact,
      "react-hooks": reactHooks,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    ignores: [
      "node_modules/",
      "dist/",
      "src/scripts/pixi-animate",
      "titans_rc",
      "**/*.d.ts",
    ],
    rules: {
      ...pluginReact.configs.flat.recommended.rules, // подключаем recommended правила react
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "no-unused-expressions": [
        "error",
        { allowShortCircuit: true, allowTernary: true },
      ],
      "@typescript-eslint/no-unused-expressions": [
        "error",
        { allowShortCircuit: true, allowTernary: true },
      ],
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "react/display-name": "off",
      "no-undef": "off",
      "react-hooks/rules-of-hooks": "error", // проверка правил хуков
      "react-hooks/exhaustive-deps": "warn", // проверка зависимостей
    },
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: process.cwd(),
      },
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        console: "readonly",
        process: "readonly",
        module: "readonly",
      },
    },
  },
];
