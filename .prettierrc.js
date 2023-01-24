/** @type {import('prettier').Options} */
const prettierConfig = {
  arrowParens: 'always',
  endOfLine: 'lf',
  printWidth: 100,
  singleQuote: true,
  tabWidth: 4,
  trailingComma: 'all',
  bracketSpacing: false,
  overrides: [
    {
      files: '**/*.@(yml|yaml)',
      options: {
        tabWidth: 2,
      },
    },
  ],
};

module.exports = prettierConfig;
