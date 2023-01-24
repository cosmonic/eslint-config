/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      env: {
        jest: true,
        node: true,
        mocha: true,
      },
      extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react'],
      globals: {
        vi: true,
      },
    },
  ],
};
