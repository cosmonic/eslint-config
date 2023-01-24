// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-config/patch/modern-module-resolution');

function baseConfig(profile) {
  /**
   * @type {import('eslint').ESLint.ConfigData}
   */
  return {
    extends: [
      'plugin:import/recommended',
      'plugin:import/typescript',
      ...(profile === 'web-app' ? ['@rushstack/eslint-config/profile/web-app'] : []),
      '@rushstack/eslint-config/mixins/tsdoc',
    ],
    plugins: ['eslint-plugin-absolute-imports-only'],
    parser: '@typescript-eslint/parser',
    ignorePatterns: ['build/*', 'node_modules/*'],
    env: {
      ...(profile === 'web-app' ? { browser: true } : {}),
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      'no-unused-vars': 0,
      '@typescript-eslint/no-unused-vars': 1,
      '@typescript-eslint/no-loss-of-precision': 1,
      'no-console': [1, { allow: ['info', 'warn', 'error'] }],
      'no-undef': 1,
      'no-unreachable': 1,
      'no-param-reassign': 1,
      'no-case-declarations': 1,
      'no-unneeded-ternary': 1,
      'no-mixed-operators': 1,
      'spaced-comment': [1, 'always', { markers: ['/'] }],
      'absolute-imports-only/only-absolute-imports': ['warn', { levels: 1 }],
      'import/no-cycle': 2,
      'import/order': [
        1,
        {
          alphabetize: {
            order: 'asc',
          },
          groups: [
            'type',
            'builtin',
            'external',
            'internal',
            'object',
            'parent',
            'sibling',
            'index',
          ],
        },
      ],
    },
  };
}

module.exports = baseConfig;
