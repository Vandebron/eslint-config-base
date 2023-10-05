module.exports = {
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['default'],
        format: ['camelCase'],
      },
      {
        selector: ['typeAlias', 'typeParameter'],
        format: ['PascalCase', 'camelCase'],
      },
      {
        selector: ['variable'],
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: ['typeLike', 'enumMember'],
        format: ['PascalCase'],
      },
      {
        selector: ['method', 'function'],
        format: ['camelCase', 'PascalCase'],
      },
      { selector: 'parameter', format: ['camelCase'], leadingUnderscore: 'allow' },
      {
        selector: 'property',
        format: null,
      },
    ],

    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

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

    '@typescript-eslint/no-floating-promises': 'off',

    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': {
            message: [
              '`{}` actually means "any non-nullish value".',
              '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
              '- If you want a type meaning "any value", you probably want `unknown` instead.',
            ].join('\n'),
            fixWith: 'unknown',
          },
        },
        extendDefaults: true,
      },
    ],
  },
};
