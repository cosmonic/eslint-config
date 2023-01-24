// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-config/patch/modern-module-resolution');

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    '@rushstack/eslint-config/profile/web-app',
    '@rushstack/eslint-config/mixins/react',
    '@rushstack/eslint-config/mixins/tsdoc',
  ],
  plugins: ['eslint-plugin-absolute-imports'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['build/*', 'node_modules/*'],
  env: {
    browser: true
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  overrides: [
    {
      files: ['*rc.js', '*.config.+(js|ts)'],
      env: {
        node: true,
      },
    },
    {
      files: ['*.test.+(ts|tsx)', 'src/test/**/*.+(ts|tsx)'],
      env: {
        jest: true,
        node: true,
      },
      globals: {
        vi: true,
      },
    },
    {
      files: ['cypress/**/*.ts'],
      extends: ['plugin:cypress/recommended'],
      parserOptions: {
        project: './cypress/tsconfig.json',
      },
    },
  ],
  rules: {
    '@typescript-eslint/ban-types': 2,
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-unused-vars': 'off',
    'no-console': [1, {
      allow: ['info', 'warn', 'error']
    }],
    'no-undef': 1,
    'no-unreachable': 1,
    'absolute-imports/only-absolute-imports': ['warn', { allowSiblings: true }],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        groups: [
          'type',
          'external',
          'internal',
          'builtin',
          'parent',
          'object',
          'index',
          'sibling',
        ],
      },
    ],
  },
};