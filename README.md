Vandebron's base eslint config, integrated with typescript and prettier.

## Installation

1. Make sure you have all the dependencies installed:

  - `eslint`
  - `typescript`
  - `@typescript-eslint/eslint-plugin`
  - `eslint-config-prettier`
  - `eslint-plugin-prettier`
  - `eslint-plugin-react`
  
2. Install the package:

  - `yarn add -D @vandebron/eslint-config-base`
  
## Configuration

1. In your `eslintrc`, add `@vandebron/eslint-config-base` to the `extends` array:

```
{
...
  extends: [..., @vandebron/eslint-config-base],
...
}
```

You can still add your own custom rules to your `eslintrc` and overwrite the ones in this config.

2. Tell eslint where to find your `tsconfig` (needed to enable rules that require type information):

```
{
...
  project: require('path').resolve(__dirname, './tsconfig.json'),
...
}
```

3. (Optional) Use the included `.prettierrc.js`:

Create or edit your own existing prettier config, and have it look like this:

```
module.exports = {
  ...require('@vandebron/eslint-config-base/.prettierrc.js'),
};
```
