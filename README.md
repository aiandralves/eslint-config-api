# Aiandra ESLint config

## Whats included?

-   Standard config base;
-   Angular Eslint;
-   Prettier;

## 🚀 Setup

Install dependencies:

```sh
npm i -D @aiandralves/eslint-config@latest
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

### 🧩 Version compatibility

| Package        | Version           |
|----------------|-------------------|
| **Angular**    | >= 17.3.0         |
| **Eslint**     | >= 9.29 <= 8.56.0 |
| **Typescript** | >= 5.0            |
