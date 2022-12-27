module.exports = {
  extends: "@cybozu/eslint-config/presets/typescript-prettier",
  plugins: ["kuc-v1"],
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "kuc-v1/no-create-render-root-function": "error",
    "kuc-v1/no-using-custom-event": "error",
    "kuc-v1/no-using-generate-guid-function": "error",
    "kuc-v1/no-using-img-tag": "error",
    "kuc-v1/no-lowercase-6digits-color-code": "error",
    "kuc-v1/no-kuc-class-prefix": "error",
    "kuc-v1/validator-in-should-update": "error",
    "kuc-v1/double-quote-attribute-value": "error",
    "kuc-v1/inherit-from-KucBase": "error",
    "kuc-v1/super-update": "error",
    "kuc-v1/no-prefix-of-private-function": "error",
    "kuc-v1/no-using-bem-method-for-classname": "error",
    "kuc-v1/no-using-event-handler-name": "error",
    "kuc-v1/private-custom-event": "error",
    "kuc-v1/no-sorting-in-alphabetical-order": "error"
  },
  plugins: ["import"],
  settings: {
    // settings for typescript
    "import/resolver": {
      typescript: true,
      node: true,
    },
    "import/extensions": [".js", ".ts", ".jsx", ".tsx"],
  },
  rules: {
    // disable original eslint sort imports
    "sort-imports": [
      "error",
      { ignoreCase: true, ignoreDeclarationSort: true },
    ],
    // order imports depend on groups below and alphabetize with import path.
    // import without name such as `import "./index.ts"` can not lint. please put at bottom manually.
    "import/order": [
      "error",
      {
        // sort depend on following group order
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
  },
};
