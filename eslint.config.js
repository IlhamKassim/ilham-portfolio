/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    '@next/next/no-img-element': 'warn',
    'no-console': 'warn',
    'prefer-const': 'error',
  },
}