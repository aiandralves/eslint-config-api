import tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";

/** @type {import("eslint").FlatConfig[]} */
export default [
    {
        files: ["**/*.ts"],
        languageOptions: {
            parser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
            },
            globals: {
                console: "readonly",
            },
        },
        plugins: {
            "@typescript-eslint": tseslint,
        },
        rules: {
            "max-len": ["error", { code: 120 }],
            "space-before-function-paren": ["error", "always"],
            semi: ["error", "always"],
            quotes: ["error", "double"],
            indent: ["error", 4],
            "no-useless-constructor": "off",
        },
    },
];
