module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:import/typescript',
    'react-app',
    'airbnb',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  plugins: ['react', 'import', 'jest', 'simple-import-sort', 'jsx-a11y'],
  rules: {
    'react/function-component-definition': 'off',
    'import/no-named-as-default': 'warn',
    'import/extensions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 'off',
    'operator-linebreak': 'off',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',
    'no-case-declarations': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-mixed-operators': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-script-url': 'warn',
    'object-curly-newline': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-sort-props': 'error',
    'react/no-array-index-key': 'off',
    'sort-keys': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react', '^@?\\w'],
          ['^(@|components)(/.*|$)'],
          ['^\\u0000'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.?(css)$'],
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
        moduleDirectory: ['src', 'node_modules'],
      },
    },
  },
};
