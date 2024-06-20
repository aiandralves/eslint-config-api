# Aiandra ESLint config

## Whats included?

-   Standard config base;
-   Angular Eslint;
-   Prettier;

## 🚀 Setup

Install dependencies:

```sh
npm i -D @aiandralves/eslint-config
```

Inside `.eslintrc.json`

### Node.js

```json
{
    "extends": ["@aiandralves/eslint-config/node"]
}
```

### Angular

```json
{
    "extends": ["@aiandralves/eslint-config/angular"]
}
```

### Next

```json
{
    "extends": ["@aiandralves/eslint-config/next", "next/core-web-vitals"]
}
```

### React

```json
{
    "extends": ["@aiandralves/eslint-config/react"]
}
```

### 🧩 Version compatibility

| Package       | Version          |
| ------------- | ---------------- |
| **Angular**   | >= 17.3.0        |
| **Eslint**    | >= 8.0 <= 8.57.0 |
| **Typescrit** | >= 5.0           |
