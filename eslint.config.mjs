import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const config = [
  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/out/**',
      '**/build/**',
      '**/dist/**',
      '**/*.config.js',
      '**/*.config.mjs',
      '**/*.config.ts',
    ],
  },
  ...compat.extends(
      'next/core-web-vitals',
      'next/typescript'
  ),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      // Unused variables - warn instead of error for development
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      // React specific rules
      'react/no-unescaped-entities': [
        'error',
        {
          forbid: [
            {
              char: '>',
              alternatives: ['&gt;'],
            },
            {
              char: '<',
              alternatives: ['&lt;'],
            },
            {
              char: '"',
              alternatives: ['&quot;', '&ldquo;', '&#34;', '&rdquo;'],
            },
          ],
        },
      ],

      // Next.js specific rules - warn instead of error for development
      '@next/next/no-img-element': 'warn',

      // React hooks rules - warn for missing dependencies
      'react-hooks/exhaustive-deps': 'warn',

      // General code quality
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',

      // Allow double quotes in JSX
      'jsx-quotes': ['error', 'prefer-double'],

      // TypeScript specific rules
      '@typescript-eslint/no-explicit-any': 'warn',

      // Import/export rules
      'no-duplicate-imports': 'error',
    },
  },
];

export default config;