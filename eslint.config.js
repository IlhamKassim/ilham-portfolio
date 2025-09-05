/** @type {import('eslint').Linter.Config} */
export default [
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['node_modules/**', '.next/**', 'out/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'error',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['node_modules/**', '.next/**', 'out/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'no-unused-vars': 'off', // TypeScript handles this
      'no-console': 'warn',
      'prefer-const': 'error',
    },
  },
]