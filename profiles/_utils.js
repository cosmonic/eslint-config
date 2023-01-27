const rushStackBase = require('@rushstack/eslint-config/profile/web-app');

/**
 * The `@rushstack/eslint-config` package provides existing naming convention rules. This allows us
 * to selectively replace or add rules by matching their selector.
 *
 * @param {any[]} rules replacement rules
 * @param {boolean} replace whether to replace or append the rule
 * @returns new set of rules
 */
function extendRushNamingConventionRules(newRule, replace = true) {
  const tsOverrides = rushStackBase.overrides.find((rule) =>
    rule.files.some((file) => file.includes('ts')),
  );

  const [, ...tsNamingConventions] = tsOverrides.rules['@typescript-eslint/naming-convention'];

  return [
    ...tsNamingConventions.filter((rule) => replace && newRule.selector !== rule.selector),
    newRule,
  ];
}

module.exports = {
  extendRushNamingConventionRules,
};
