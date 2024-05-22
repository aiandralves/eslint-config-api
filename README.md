# Aiandra ESLint config

## Whats included?

-   Standard config base;
-   Angular Eslint;
-   Prettier;

## 🚀 Setup

Install dependencies:

```
npm i -D @aiandralves/eslint-config
```

Inside `.eslintrc.json`

### Node.js

```
{
    "extends": [
        "@aiandralves/eslint-config/node"
    ]
}
```

### Angular

```
{
    "extends": [
        "@aiandralves/eslint-config/angular"
    ]
}
```

### 🧩 Version compatibility

| Package       | Version          |
| ------------- | ---------------- |
| **Angular**   | >= 17.3.0        |
| **Eslint**    | >= 8.0 <= 8.57.0 |
| **Typescrit** | >= 5.0           |
