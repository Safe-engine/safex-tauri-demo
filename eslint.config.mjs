import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import lodashImportMethod from 'eslint-plugin-lodash-import-method';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        '**/node_modules',
        '**/dist',
        '**/.github',
        '**/.husky',
        '**/docs',
        '**/public',
        '**/uploads',
        '**/run',
        '**/watch.js',
        '**/frameworks',
    ],
}, ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
), {
    plugins: {
        'lodash-import-method': lodashImportMethod,
        'simple-import-sort': simpleImportSort,
        'unused-imports': unusedImports,
        '@typescript-eslint': typescriptEslint,
    },

    languageOptions: {
        parser: tsParser,
    },

    rules: {
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'unused-imports/no-unused-imports': 'warn',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        'lodash-import-method/submodule': 'error',

        'no-multiple-empty-lines': ['error', {
            max: 1,
            maxBOF: 0,
            maxEOF: 1,
        }],

        quotes: ['error', 'single'],
        'prefer-template': 'error',
    },
}];