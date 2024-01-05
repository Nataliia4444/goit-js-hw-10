# @danielgiljam/prettierrc

My [Prettier] configuration.

## How To Use

Install [@danielgiljam/prettierrc] and [prettier].

```bash
npm i @danielgiljam/prettierrc prettier@^2.3.1
```

Create a file called `.prettierrc.js`.

```bash
touch .prettierrc.js
```

Export [@danielgiljam/prettierrc] from `.prettierrc.js`.

```js
const prettierrc = require("@danielgiljam/prettierrc")

module.exports = prettierrc
```

## Recommended Setup

The recommended way to use [@danielgiljam/prettierrc] is together with [@danielgiljam/eslint-config] and [ESLint].

[ESLint] catches/fixes potential bugs and problems and [Prettier] reprints the code to ensure the format is right and the style is consistent.

You can implement these tools into your development workflow however you like. However, my personal favorite ways of implementing them are the following:

### Fix and Format Code In Place With An NPM script

1. Modify your `package.json` to include the following NPM scripts:
   ```json
   {
     "scripts": {
       "fix": "eslint --fix .",
       "format": "prettier --write .",
       "ff": "npm run fix && npm run format"
     }
   }
   ```
2. Typing `npm run ff` in your terminal then applies [@danielgiljam/eslint-config] and [@danielgiljam/prettierrc] to your source code.

### Fix and Format On Save in Visual Studio Code

1. Install the following extensions:
   - [`vscode-eslint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - [`prettier-vscode`](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   - [`format-code-action`](https://marketplace.visualstudio.com/items?itemName=rohit-gohri.format-code-action)
2. Make the following changes to your settings:
   ```json
   {
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "editor.formatOnSave": false,
     "editor.codeActionsOnSave": [
       "source.fixAll.eslint",
       "source.fixAll.format"
     ]
   }
   ```
3. Now when you save a file, it will first be fixed and then formatted in place.

## Version History

View [changelog](https://github.com/DanielGiljam/prettierrc/blob/master/CHANGELOG.md).

[@danielgiljam/eslint-config]: https://www.npmjs.com/package/@danielgiljam/eslint-config
[@danielgiljam/prettierrc]: https://www.npmjs.com/package/@danielgiljam/prettierrc
[eslint]: (https://eslint.org/)
[prettier]: (https://prettier.io/)
