module.exports = {
    "extends": [
        "google",
        "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "allowImportExportEverywhere": true
    },
    "rules": {
        "max-len": [1, 120, 2, {
            "ignorePattern": "^import\\s.+\\sfrom\\s.+;$",
            "ignoreUrls": true
        }],
    }
};