module.exports = {
  rules: {
    '@typescript-eslint/camelcase': [
      'error',
      {
        properties: 'never',
      },
    ],

    '@typescript-eslint/explicit-function-return-type': 'off',

    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      {
        accessibility: 'no-public',
        overrides: {
          constructors: 'off',
        },
      },
    ],

    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
      },
    ],
  },
};
