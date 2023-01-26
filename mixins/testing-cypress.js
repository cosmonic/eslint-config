/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  overrides: [
    {
      files: ['cypress/**/*.[jt]s?(x)', '**/*.cypress.[jt]s?(x)'],
      extends: ['plugin:cypress/recommended'],
      parserOptions: {
        project: './cypress/tsconfig.json',
      },
    },
  ],
};
