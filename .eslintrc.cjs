module.exports = {
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.node.json'],
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'prettier',
    'react-refresh',
    '@typescript-eslint',
    'eslint-plugin-import',
    'simple-import-sort',
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.tsx', '.ts'],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-use-before-define': 'error',
    'no-unused-vars': 'error',
    indent: ['error', 2],
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': 'warn',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        importOrder: 0,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test.{ts,tsx,js,jsx}',
          'test-*.{ts,tsx,js,jsx}',
          '**/*{.,_}{test,spec}.{ts,tsx,js,jsx}',
          '*.config.{ts,js}',
          '**/setupTests.{ts,js}',
          '**/jest.setup.{ts,js}',
          '**/*.stories.*',
          '**/.storybook/**/*.*',
        ],
      },
    ],
  },
};
