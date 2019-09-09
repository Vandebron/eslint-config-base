module.exports = {
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', {
      'args': 'after-used'
    }],

    '@typescript-eslint/explicit-member-accessibility': ['warn', {
      accessibility: 'no-public',
      overrides: {
        constructors: 'off',
        properties: 'explicit',
      }
    }],

    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
