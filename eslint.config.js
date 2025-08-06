// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

// Core ESLint
import js from '@eslint/js';
import globals from 'globals';
import { globalIgnores } from 'eslint/config';

// TypeScript
import tseslint from 'typescript-eslint';

// React ecosystem
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';

// Code quality
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';

export default tseslint.config([
  globalIgnores(['dist', 'node_modules', 'build', 'coverage']),
  {
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.app.json',
        },
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    ignores: [
      'tailwind.config.ts',
      'vite.config.ts',
      '.storybook/**/*',
      'vitest.shims.d.ts',
      'vitest.storybook.config.ts',
    ],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      jsxA11y.flatConfigs.recommended,
    ],
    plugins: {
      react,
      import: importPlugin,
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: './tsconfig.app.json',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // TypeScript
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'warn',

      // Code quality
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'prefer-template': 'error',
      'no-useless-return': 'error',

      // Import organization
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc' },
        },
      ],
      'import/no-unresolved': 'error',
      'import/no-duplicates': 'error',

      // React (modern rules for React 17+)
      'react/jsx-key': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-undef': 'error',
      'react/no-unescaped-entities': 'warn',
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
      'react/self-closing-comp': 'error',
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-no-constructed-context-values': 'error',
    },
  },
  {
    files: ['**/*.{test,spec}.{ts,tsx}'],
    // Inherit everything from main config automatically
    // Just override what's different
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      // Testing library react
      'testing-library/await-async-queries': 'error',
      'testing-library/no-await-sync-queries': 'error',
      'testing-library/no-debugging-utils': 'warn',
      'testing-library/no-dom-import': 'error',
      'testing-library/no-render-in-setup': 'error',
      'testing-library/prefer-screen-queries': 'error',
      'testing-library/prefer-wait-for': 'error',
      'testing-library/no-node-access': 'error',

      // Vitest
      'vitest/expect-expect': 'error',
      'vitest/no-disabled-tests': 'warn',
      'vitest/no-focused-tests': 'error',
      'vitest/no-identical-title': 'error',
      'vitest/no-import-node-test': 'error',
      'vitest/no-test-return-statement': 'error',
      'vitest/prefer-hooks-in-order': 'error',
      'vitest/prefer-lowercase-title': 'error',
    },
  },
  {
    files: ['.storybook/**/*', '**/*.stories.{ts,tsx}'],
    ...storybook.configs['flat/recommended'],
  },
  { rules: prettier.rules },
]);
