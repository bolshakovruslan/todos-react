module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['react-app', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        "no-unused-vars": "",
        "@typescript-eslint/no-unused-vars": ["error"],
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"]
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};