module.exports = {
    root: true,
    ignorePatterns: ["projects/**/*"],
    plugins: ["unused-imports"],
    overrides: [
        {
            files: ["*.ts"],
            extends: [
                "eslint:recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@angular-eslint/recommended",
                "plugin:@angular-eslint/template/process-inline-templates",
            ],
            rules: {
                "no-unused-vars": "off",
                "@typescript-eslint/no-unused-vars": "off",
                "unused-imports/no-unused-imports": "error",
                "unused-imports/no-unused-vars": [
                    "warn",
                    {
                        vars: "all",
                        varsIgnorePattern: "^_",
                        args: "after-used",
                        argsIgnorePattern: "^_",
                    },
                ],
                "@angular-eslint/directive-selector": [
                    "error",
                    {
                        type: "attribute",
                        style: "camelCase",
                    },
                ],
                "@angular-eslint/component-selector": [
                    "error",
                    {
                        type: "element",
                        style: "kebab-case",
                    },
                ],
                "space-before-function-paren": ["error", "always"],
                semi: ["error", "always"],
                quotes: ["error", "double"],
                indent: ["error", 4],
                "max-len": ["error", 120],
                "no-useless-constructor": "off",
                "no-void": "off",
                "@typescript-eslint/no-explicit-any": "off",
            },
        },
        {
            files: ["*.html"],
            extends: ["plugin:@angular-eslint/template/recommended", "plugin:@angular-eslint/template/accessibility"],
            rules: {},
        },
    ],
};
