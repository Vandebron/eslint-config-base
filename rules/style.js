module.exports = {
  rules: {
    'array-bracket-spacing': ['error', 'never'],

    // disabled as we're using '@typescript-eslint/camelcase'
    camelcase: 'off',
    'comma-dangle': ['error', 'always-multiline'],
    curly: ['error', 'all'],
    'lines-between-class-members': ['error', 'always'],
    'max-len': 'off',
    'no-underscore-dangle': ['error'],
    'object-curly-newline': 'off',
    'object-curly-spacing': ['error', 'always'],
    'padded-blocks': ['error', 'never'],
    'quote-props': ['error', 'as-needed'],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    semi: ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0,
        maxBOF: 0,
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'if', next: '*' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'never', prev: 'import', next: 'import' },
    ],
  },
};
