module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'next/core-web-vitals',
    'prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['simple-import-sort', 'prettier', '@typescript-eslint', 'jsx-a11y'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'sort-imports': 'off',
    'tailwindcss/no-custom-classname': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          ['^.+\\.s?css$'],
          [
            `^(${require('module').builtinModules.join('|')})(/|$)`,
            '^react',
            '^@?\\w',
          ],
          ['^components(/.*|$)'],
          ['^lib(/.*|$)', '^hooks(/.*|$)'],
          ['^\\.'],
        ],
      },
    ],
  },
  settings: {
    tailwindcss: {
      callees: ['cn'],
      config: 'tailwind.config.js',
    },
  },
};
