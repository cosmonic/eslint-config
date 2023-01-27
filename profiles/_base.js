// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-config/patch/modern-module-resolution');

/**
 * Build config based on profile
 * @returns {import('eslint').ESLint.ConfigData}
 */
function baseConfig(profile) {
  return {
    extends: [
      'plugin:import/recommended',
      'plugin:import/typescript',
      ...(profile === 'web-app' ? ['@rushstack/eslint-config/profile/web-app'] : []),
      '@rushstack/eslint-config/mixins/tsdoc',
      'plugin:eslint-comments/recommended',
    ],
    plugins: ['eslint-plugin-absolute-imports-only'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
    },
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
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
      '@typescript-eslint/no-loss-of-precision': 'warn',
      'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
      'no-undef': 'warn',
      'no-unreachable': 'warn',
      'no-param-reassign': 'warn',
      'no-case-declarations': 'warn',
      'no-unneeded-ternary': 'warn',
      'no-mixed-operators': 'warn',
      'spaced-comment': ['warn', 'always', { markers: ['/'] }],
      'absolute-imports-only/only-absolute-imports': ['warn', { levels: 1 }],
      'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
      'eslint-comments/require-description': 'warn',
      'import/no-cycle': 'error',
      'import/order': [
        'warn',
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
