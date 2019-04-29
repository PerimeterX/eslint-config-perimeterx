module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 2018
    },
    "rules": {
        "indent": ["error", 4, {"SwitchCase": 1}],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single", {"allowTemplateLiterals": true, "avoidEscape": true}],
        "semi": ["error", "always"],
        "no-useless-escape": ["warn"],
        "no-undef": ["error"],
        "no-console": ["warn"],
        "no-multiple-empty-lines": ["error", {"max": 1}],
        "no-var": ["error"],
        "no-eval": ["error"],
        "no-implied-eval": ["error"],
        "no-empty": ["error", {"allowEmptyCatch": true}],
        "curly": ["error", "multi-line", "consistent"],
        "brace-style": ["error", "1tbs", {"allowSingleLine": true}],
        "prefer-const": ["error"],
        "space-before-blocks": ["error", "always"],
        "comma-spacing": ["error"],
        "camelcase": ["error", {"properties": "never"}],
        "eqeqeq": ["error"],
        "comma-dangle": ["error", "only-multiline"],
        "space-infix-ops": ["error"],
        "no-with": ["error"],
        "no-alert": ["error"],
        "no-lone-blocks": ["error"],
        "no-loop-func": ["error"],
        "no-new-func": ["error"],
        "no-proto": ["error"],
        "no-self-compare": ["error"],
        "no-useless-call": ["error"],
        "no-useless-concat": ["error"],
        "no-with": ["error"],
        "object-curly-spacing": ["error", "never"],
        "array-bracket-spacing": ["error", "never"]
    }
};

