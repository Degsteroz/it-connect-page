import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      indent: [
        'error',
        2
      ],
      'linebreak-style': [
        'error',
        'unix'
      ],
      'jsx-a11y/click-events-have-key-events': [
        'off'
      ],
      quotes: [
        'error',
        'single'
      ],
      semi: [
        'warn',
        'always'
      ],
      'no-unused-vars': [
        'error',
        {
          'argsIgnorePattern': '^_'
        }
      ],
      'react/no-did-update-set-state': 0,
      'object-curly-spacing': ['error', 'always'],
      'global-require': 0,
      'consistent-return': 0,
      'eqeqeq': 1,
      'react/no-array-index-key': 1,
      'prefer-destructuring': 1,
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines':['error', { 'max': 1 }],
      'no-mixed-operators': 1,
      'max-len': ['warn', { 'code': 120,'ignoreStrings': true, 'ignoreTemplateLiterals': true }],
      'jsx-a11y/label-has-for': 0,
      'no-underscore-dangle': 0,
      'no-return-assign': ['warn', 'except-parens'],
      'react/prop-types': 1
    }
  }
];
