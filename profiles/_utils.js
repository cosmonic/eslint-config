/** @type {import('eslint').Linter.BaseConfig} */
// @ts-ignore -- no types, we're doing it live
const rushStackBase = require('@rushstack/eslint-config/profile/web-app');

/**
 * The `@rushstack/eslint-config` package provides existing naming convention rules. This allows us
 * to selectively replace or add rules by matching their selector.
 *
 * @param {any[]} newRules replacement rules
 * @param {boolean} replace whether to replace or append the rule
 * @returns {any[]} new set of rules
 */
function extendRushNamingConventionRules(newRules, replace = true) {
  const tsOverrides = rushStackBase.overrides?.find(
    (rule) => typeof rule.files !== 'string' && rule.files.some((file) => file.includes('ts')),
  ) || { rules: {} };

  if (tsOverrides.rules && '@typescript-eslint/naming-convention' in tsOverrides.rules) {
    if (
      typeof tsOverrides.rules['@typescript-eslint/naming-convention'] === 'string' ||
      typeof tsOverrides.rules['@typescript-eslint/naming-convention'] === 'number'
    ) {
      return [];
    }

    const [, ...tsNamingConventions] = tsOverrides.rules[
      '@typescript-eslint/naming-convention'
    ] ?? [0, {}];

    return [
      ...tsNamingConventions.filter(
        (rule) => replace && newRules.some((newRule) => newRule.selector !== rule.selector),
      ),
      ...newRules,
    ];
  }

  return [];
}

module.exports = {
  extendRushNamingConventionRules,
};
