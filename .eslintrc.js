module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app',
    'plugin:react/recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    /**
     * ! Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
     * ? note you must disable the base rule as it can report incorrect errors
     */
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint'],
      rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
      },
    },
  ],
  // WRONG: Do not use @typescript-eslint/parser on JS files
  // "parser": "@typescript-eslint/parser",
  plugins: [
    'react',
    // "@typescript-eslint"
  ],
};
