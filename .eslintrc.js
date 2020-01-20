/*
 * @Author: lifan
 * @Date: 2019-12-27 13:26:10
 * @Last Modified by: lifan
 * @Last Modified time: 2019-12-30 15:25:46
 */
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "react-app",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "react/prop-types": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "react/display-name": 0,
    "react-hooks/exhaustive-deps": 0
  },
};
