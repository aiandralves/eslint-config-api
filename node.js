module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: ["standard"],
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
        "no-useless-constructor": "off",
    },
};
