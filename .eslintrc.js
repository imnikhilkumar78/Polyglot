module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true  //If you will not put this it will give undef error as we are running in node environment.
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
}
