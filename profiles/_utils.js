/** @type {import('eslint').Linter.BaseConfig} */
// @ts-ignore -- no types, we're doing it live
const rushStackBase = require('@rushstack/eslint-config/profile/web-app');

/**
 * @typedef {{
 *   selector: string
 * }} Rule
 */

/**
 * The `@rushstack/eslint-config` package provides existing naming convention rules. This allows us
 * to selectively replace or add rules by matching their selector.
 *
 * @param {Rule} newRule replacement rules
 * @param {boolean} replace whether to replace or append the rule
 * @returns {Rule[]} new set of rules
 */
function extendRushNamingConventionRules(newRule, replace = true) {
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
      ...tsNamingConventions.filter((rule) => replace && newRule.selector !== rule.selector),
      newRule,
    ];
  }

  return [];
}

module.exports = {
  extendRushNamingConventionRules,
};
