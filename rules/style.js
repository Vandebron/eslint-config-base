module.exports = {
  rules: {
    'array-bracket-spacing': ['error', 'never'],

    // disabled as we're using '@typescript-eslint/camelcase'
    'camelcase': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': 'off',
    'no-underscore-dangle': ['error'],
    'object-curly-newline': 'off',
    'object-curly-spacing': ['error', 'always'],
    'quote-props': ['error', 'as-needed'],
    'quotes': ['error', 'single', {
      avoidEscape: true,
    }],
    'semi': ['error', 'always'],
    'space-in-parens': ['error', 'never'],

    'no-multiple-empty-lines': ['error', {
      'max': 1,
      'maxEOF': 0,
      'maxBOF': 0,
    }],
  },
};
