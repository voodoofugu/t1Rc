import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [
      "node_modules/",
      "dist/",
      "public/pixi/**",
      "scripts/**/*.mjs",
      "src/scripts/pixi-animate/**",
      "titans_rc/**",
      "**/*.d.ts",
      "**/*.config.js",
      "**/*.config.ts",
      "morphing-scroll/buildHelper.js",
      "morphing-scroll/publish/**",
      "morphing-scroll/*.config.ts",
      "morphing-scroll/*.config.mjs",
      "morphing-scroll/src/index.ts",
    ],
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  // Основные исходники (с проектным tsconfig)
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      react: pluginReact,
      "react-hooks": reactHooks,
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
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
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
      "@typescript-eslint/no-var-requires": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "react/display-name": "off",
      "no-undef": "off",
      "react-hooks/rules-of-hooks": "error",
      "react/no-unescaped-entities": "off",
      "react/no-unknown-property": "off",
      "react-hooks/exhaustive-deps": "off",
    },
  },

  {
    files: ["morphing-scroll/src/**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: "./morphing-scroll/tsconfig.json",
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      react: pluginReact,
      "react-hooks": reactHooks,
      // убрали "@typescript-eslint" здесь
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];
