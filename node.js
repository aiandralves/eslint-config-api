module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: ["standard", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
    parser: "@typescript-eslint/parser",
    root: true,
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint/eslint-plugin"],
    ignorePatterns: ["node.js"],
    rules: {
        "max-len": ["error", { code: 120 }],
    },
}