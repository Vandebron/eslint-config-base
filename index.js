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

  plugins: ['react-hooks', 'import'],

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/typescript',

    // custom rules
    ...['./rules/react', './rules/style', './rules/typescript', './rules/import'].map(require.resolve),
  ],
};
