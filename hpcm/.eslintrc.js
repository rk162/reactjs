module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "eqeqeq": "error",
        "indent": [
            "error",
            4
        ],
        "semi": [
            "error",
            "always"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "no-this-before-super": "warn",
        "valid-typeof": "warn",
    }
};