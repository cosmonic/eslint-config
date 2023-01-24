/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  overrides: [
    {
      files: ['**/cypress/**/*.[jt]s?(x)', '**/*.cypress.[jt]s?(x)'],
      extends: ['plugin:testing-library/dom', 'plugin:cypress/recommended'],
      parserOptions: {
        project: './cypress/tsconfig.json',
      },
    },
  ],
};
