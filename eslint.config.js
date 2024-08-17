import eslintPluginAstro from 'eslint-plugin-astro'
import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.all,
  {
    rules: {
      '@typescript-eslint/triple-slash-reference': 1,
      semi: 'off',
      'astro/semi': 'off',
      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: false,
        },
      ],
    },
  },
]
