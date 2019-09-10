module.exports = {
  rules: {
    // disabled as we're using '@typescript-eslint/camelcase'
    'camelcase': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': 'off',
    'no-underscore-dangle': ['error'],
    'object-curly-newline': 'off',
    'quote-props': ['error', 'as-needed'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],

    'no-multiple-empty-lines': ['error', {
      'max': 1,
      'maxEOF': 0,
      'maxBOF': 0,
    }],
  },
};
