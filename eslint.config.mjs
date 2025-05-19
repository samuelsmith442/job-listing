import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const config = [
  // Global configuration
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: ['.next/**', 'node_modules/**', 'dist/**', 'build/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
      }
    },
    settings: {
      react: { version: 'detect' },
      next: { rootDir: ['app/*/', 'pages/*/', 'src/pages/*/'] },
      'import/resolver': {
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
      }
    },
    plugins: {
      '@next/next': nextPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefresh,
      'import': importPlugin
    },
    rules: {
      // Base rules
      ...js.configs.recommended.rules,
      
      // React rules
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      
      // Import rules
      'import/no-unresolved': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ],
      
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/ban-ts-comment': 'warn',
      
      // Next.js rules
      '@next/next/no-html-link-for-pages': 'off',
      '@next/next/no-img-element': 'off',
      
      // General rules
      'newline-before-return': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': 'off', // Handled by @typescript-eslint/no-unused-vars
      'no-undef': 'error',
      'no-duplicate-imports': 'error',
      'prefer-const': 'error',
      'object-shorthand': 'warn',
      'no-var': 'error',
      'prefer-arrow-callback': 'warn',
      'prefer-template': 'warn',
      'no-param-reassign': 'warn',
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }]
    }
  },
  
  // TypeScript specific rules
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  
  // Prettier (must be last)
  eslintConfigPrettier
];

export default config;
