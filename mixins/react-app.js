const { extendRushNamingConventionRules } = require('../profiles/_utils');

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: [
    // react specific config
    '@rushstack/eslint-config/mixins/react',
    'plugin:react-hooks/recommended',
  ],
  globals: {
    JSX: 'readonly',
  },
  rules: {
    '@rushstack/no-new-null': 'off',
    'react/jsx-no-bind': 'off',
    '@typescript-eslint/no-floating-promises': 'warn',
    // In React, while we want to be strict with naming conventions, it's preferable to name React
    // prop interfaces with ComponentProps rather than IComponentProps. This will find the existing
    // rules and replace the interface rule with one of our own design.
    //
    '@typescript-eslint/naming-convention': [
      1,
      ...extendRushNamingConventionRules([
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '((^_?I[A-Z])|(^_?[A-Z][A-Za-z0-9$]+Props$))',
            match: true,
          },
        },
      ]),
    ],
  },
};
