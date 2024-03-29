// This is a workaround for https://github.com/eslint/eslint/issues/3458
// @ts-ignore -- no types, we're doing it live!
require('@rushstack/eslint-config/patch/modern-module-resolution');

/**
 * Build config based on profile
 * @param {string} profile
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
      '@rushstack/typedef-var': 'off',
      'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
      'no-undef': 'warn',
      'no-unreachable': 'warn',
      'no-param-reassign': 'warn',
      'no-case-declarations': 'warn',
      'no-unneeded-ternary': 'warn',
      'spaced-comment': ['warn', 'always', { markers: ['/'] }],
      'absolute-imports-only/only-absolute-imports': ['warn', { levels: 1 }],
      'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
      'eslint-comments/require-description': 'warn',
      'eslint-comments/no-unused-disable': 'error',
      'import/no-cycle': 'error',
      'import/no-named-as-default-member': 'off',
      'import/order': [
        'warn',
        {
          alphabetize: {
            order: 'asc',
          },
          groups: [
            'unknown',
            'type',
            'builtin',
            'external',
            'internal',
            'object',
            'parent',
            'sibling',
            'index',
          ],
          warnOnUnassignedImports: true,
          pathGroups: [
            {
              group: 'unknown',
              pattern: '**/*.+(css|sass|scss|less|styl)',
              patternOptions: { dot: true, nocomment: true },
              position: 'before',
            },
            {
              group: 'unknown',
              pattern: '{.,..}/**/*.+(css|sass|scss|less|styl)',
              patternOptions: { dot: true, nocomment: true },
              position: 'before',
            },
          ],
        },
      ],
    },
  };
}

module.exports = baseConfig;
