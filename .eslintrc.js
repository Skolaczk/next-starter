module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'next/core-web-vitals',
    'prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['simple-import-sort', 'prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'sort-imports': [2, { ignoreCase: true, ignoreDeclarationSort: true }],
    '@typescript-eslint/no-var-requires': 0,
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          [
            `^(${require('module').builtinModules.join('|')})(/|$)`,
            '^react',
            '^@?\\w',
          ],
          [
            '^layout(/.*|$)',
            '^common(/.*|$)',
            '^components(/.*|$)',
            '^containers(/.*|$)',
          ],
          ['^utils(/.*|$)', '^hooks(/.*|$)'],
          ['^\\.'],
          ['^models(/.*|$)'],
          ['^.+\\.s?css$'],
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
