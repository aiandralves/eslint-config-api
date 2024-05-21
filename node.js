module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: ["standard", "plugin:vitest/recommended"],
    parser: "@typescript-eslint/parser",
    root: true,
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "vitest"],
    rules: {
        "max-len": ["error", { code: 120 }],
        semi: ["error", "always"],
        quotes: ["error", "double"],
        indent: ["error", 4],
        arrowParens: "always",
        trailingComma: "all",
        "no-useless-constructor": "off",
    },
};
