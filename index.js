module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',

    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  plugins: ['react-hooks'],

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',

    // custom rules
    ...['./rules/react', './rules/style', './rules/typescript'].map(require.resolve),
  ],
};
