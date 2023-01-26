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
    '@rushstack/no-new-null': 0,
  },
};
