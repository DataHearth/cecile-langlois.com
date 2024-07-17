import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import esPlgSvelte from 'eslint-plugin-svelte';
import esCfgPrettier from 'eslint-config-prettier';
import svelteParser from 'svelte-eslint-parser';
import globals from 'globals';
import esPlgDrizzle from 'eslint-plugin-drizzle';

export default tseslint.config(
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        extraFileExtensions: ['.svelte']
      },
      parser: tseslint.parser
    }
  },
  {
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser
      },
      parser: svelteParser
    },
    files: ['**/*.svelte', '*.svelte']
  },
  {
    ignores: ['build/', '.svelte-kit/', 'dist/', '*.config.js', '.direnv', '.env', '.env.*']
  },
  ...tseslint.configs.recommended,
  ...esPlgSvelte.configs['flat/recommended'],
  ...esPlgSvelte.configs['flat/prettier'],
  pluginJs.configs.recommended,
  esCfgPrettier,
  esPlgDrizzle.config.recommended
);
