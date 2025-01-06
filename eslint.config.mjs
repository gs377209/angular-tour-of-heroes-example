import typescriptEslint from "@typescript-eslint/eslint-plugin";
import ngrx from "@ngrx/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ["projects/**/*"],
  },
  ...compat
    .extends(
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@angular-eslint/recommended",
      "plugin:@angular-eslint/template/process-inline-templates",
      "plugin:@ngrx/all",
      "prettier",
    )
    .map((config) => ({
      ...config,
      files: ["**/*.ts"],
    })),
  {
    files: ["**/*.ts"],

    plugins: {
      "@typescript-eslint": typescriptEslint,
      "@ngrx": ngrx,
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: "script",

      parserOptions: {
        project: ["tsconfig.json"],
        createDefaultProgram: true,
      },
    },

    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],

      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],

      "sort-imports": [
        "error",
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
          allowSeparatedGroups: false,
        },
      ],

      "no-duplicate-imports": "error",

      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["lodash", "lodash/*"],
              message: "Please use 'lodash-es' instead.",
            },
          ],
        },
      ],

      "@angular-eslint/prefer-standalone": "off",
    },
  },
  ...compat
    .extends(
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@angular-eslint/template/recommended",
      "prettier",
    )
    .map((config) => ({
      ...config,
      files: ["**/*.html"],
    })),
  {
    files: ["**/*.html"],
    rules: {},
  },
];

// old config: .eslintrc.json
//   {
//   "root": true,
//   "ignorePatterns": ["projects/**/*"],
//   "overrides": [
//     {
//       "files": ["*.ts"],
//       "parser": "@typescript-eslint/parser",
//       "parserOptions": {
//         "project": ["tsconfig.json"],
//         "createDefaultProgram": true
//       },
//       "extends": [
//         "eslint:recommended",
//         "plugin:@typescript-eslint/recommended",
//         "plugin:@angular-eslint/recommended",
//         "plugin:@angular-eslint/template/process-inline-templates",
//         "plugin:@ngrx/all",
//         "prettier"
//       ],
//       "plugins": ["@typescript-eslint", "@ngrx"],
//       "rules": {
//         "@angular-eslint/directive-selector": [
//           "error",
//           {
//             "type": "attribute",
//             "prefix": "app",
//             "style": "camelCase"
//           }
//         ],
//         "@angular-eslint/component-selector": [
//           "error",
//           {
//             "type": "element",
//             "prefix": "app",
//             "style": "kebab-case"
//           }
//         ],
//         "sort-imports": [
//           "error",
//           {
//             "ignoreCase": false,
//             "ignoreDeclarationSort": true,
//             "ignoreMemberSort": false,
//             "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
//             "allowSeparatedGroups": false
//           }
//         ],
//         "no-duplicate-imports": "error",
//         "no-restricted-imports": [
//           "error",
//           {
//             "patterns": [
//               {
//                 "group": ["lodash", "lodash/*"],
//                 "message": "Please use 'lodash-es' instead."
//               }
//             ]
//           }
//         ],
//         "@angular-eslint/prefer-standalone": "off"
//       }
//     },
//     {
//       "files": ["*.html"],
//       "extends": [
//         "eslint:recommended",
//         "plugin:@typescript-eslint/recommended",
//         "plugin:@angular-eslint/template/recommended",
//         "prettier"
//       ],
//       "rules": {}
//     }
//   ]
// }
