module.exports = {
   extends: [
      "next/core-web-vitals",
      "plugin:@typescript-eslint/recommended",
      "airbnb-typescript",
      "prettier",
      "prettier/@typescript-eslint",
      "prettier/react",
   ],
   plugins: ["simple-import-sort", "prettier", "@typescript-eslint"],
   parser: "@typescript-eslint/parser",
   rules: {
      "prettier/prettier": "error",
      "prefer-destructuring": ["error"],
      "react/jsx-closing-bracket-location": [
         1,
         { selfClosing: "line-aligned", nonEmpty: "after-props" },
      ],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
         "error",
         { argsIgnorePattern: "^_" },
      ],
      "react/prop-types": 0,
      "import/prefer-default-export": 0,
      "global-require": 0,
      "react/jsx-filename-extension": 0,
      "simple-import-sort/imports": "error",
      "react/jsx-props-no-spreading": 0,
      "react/no-array-index-key": 0,
      "@typescript-eslint/ban-ts-comment": "off",
      "jsx-a11y/click-events-have-key-events": 0,
      "jsx-a11y/no-static-element-interactions": 0,
   },
   parserOptions: {
      ecmaVersion: 6,
      sourceType: "module",
      ecmaFeatures: {
         jsx: true,
      },
      project: ["tsconfig.json"],
   },
   env: {
      browser: true,
      es6: true,
   },
   globals: {
      window: true,
      document: true,
      localStorage: true,
      fetch: true,
   },
   settings: {
      "import/resolver": {
         node: {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
            paths: ["./src"],
         },
      },
   },
};
