import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import sortPlugin from 'eslint-plugin-sort';
import globals from 'globals';

export default tseslint.config(
  {
    ignores: [
      'public/**',
      '.cache/**',
      'node_modules/**',
      '.yarn/**',
      '.pnp.cjs',
      '.pnp.loader.mjs',
      '*.d.ts',
      'eslint.config.mjs',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.es2022,
      },
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: {},
        node: { paths: ['.'] },
      },
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      import: importPlugin,
      'jsx-a11y': jsxA11yPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      sort: sortPlugin,
    },
    rules: {
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,
      ...jsxA11yPlugin.flatConfigs.strict.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...sortPlugin.configs['flat/recommended'].rules,

      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { varsIgnorePattern: '^React$', argsIgnorePattern: '^_' },
      ],
      'import/no-cycle': ['error', { maxDepth: 1 }],
      'import/no-extraneous-dependencies': ['error', { includeTypes: true }],
      'import/no-unused-modules': ['error'],
      'import/no-useless-path-segments': ['error'],
      'prefer-template': 'error',
      'react/jsx-curly-brace-presence': [
        'error',
        { children: 'never', props: 'never', propElementValues: 'always' },
      ],
      'sort/string-enums': ['error', { caseSensitive: false, natural: true }],
      'sort/string-unions': ['error', { caseSensitive: false, natural: true }],
      'sort/type-properties': ['error', { caseSensitive: false, natural: true }],
    },
  },
  prettierPlugin,
);
