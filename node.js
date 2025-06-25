module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:node/recommended",
        "plugin:promise/recommended",
        "plugin:prettier/recommended"
    ],
    parser: "@typescript-eslint/parser",
    root: true,
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "max-len": ["error", { code: 120 }],
        "space-before-function-paren": ["error", "always"],
        semi: ["error", "always"],
        quotes: ["error", "double"],
        indent: ["error", 4],
        "no-useless-constructor": "off"
    },
};
