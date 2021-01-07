Vandebron's base eslint config, integrated with typescript and prettier.

## Installation

1. Make sure you have all the peer-dependencies installed:

- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint-config-prettier`
- `eslint-plugin-import`
- `eslint-plugin-prettier`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react`
- `eslint`
- `prettier`

2. Install the package:

- `yarn add -D @vandebron/eslint-config-base`

## Configuration

1. In your `eslintrc`, add `@vandebron/eslint-config-base` to the `extends` array:

```
{
  extends: [..., '@vandebron/eslint-config-base'],
}
```

You can still add your own custom rules to your `eslintrc` and overwrite the ones in this config.

2. Tell eslint where to find your `tsconfig` (needed to enable rules that require type information):

```
{
  parserOptions: {
    project: require('path').resolve(__dirname, './tsconfig.json'),
  }
}
```

3. (Optional) Use the included `.prettierrc.js`:

Create or edit your own existing prettier config, and have it look like this:

```
module.exports = {
  ...require('@vandebron/eslint-config-base/.prettierrc.js'),
};
```

4. (Local development) Install the `peerDependencies`

If you wish to use this package locally, for example with `yarn link`, then you will need to install the `peerDependencies`.
Run `yarn` from the root of this project to do so.

# Publishing

To publish a new version, first merge your branch to master. Next, pull master on your local machine and then run the following commands:

```sh
# Use the appropriate version bump. See https://semver.org/ for details
npm version (major|minor|patch)

npm publish

git push && git push --tags
```

## Alpha or Beta channels

If you want to deploy an Alpha or Beta version do the following:


```sh
npm version prerelease --preid=(alpha|beta)
npm publish --tag (alpha|beta)
```

For example, if you want to bump the version from 3.2.0 to an alpha release of the next patch version (i.e. 3.2.1), you would do the following:

```sh
npm version prerelease --preid=alpha
npm publish --tag alpha
```
