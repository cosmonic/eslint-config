/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: [
    '@rushstack/eslint-config/mixins/react',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/no-autofocus': 0,
  },
};
