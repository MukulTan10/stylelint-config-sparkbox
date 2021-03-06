module.exports = {
  "extends": ["stylelint-config-standard", "stylelint-config-recommended-scss"],
  "env": {
    "node": true,
    "browser": true
  },
  "rules": {
    "max-empty-lines": null,
    "max-nesting-depth": 4,
    "number-no-trailing-zeros": null,
    "no-empty-source": null,
    "color-hex-case": null,
    "color-hex-length": null,
    "at-rule-empty-line-before": null,
    "block-closing-brace-newline-after": null,
    "declaration-empty-line-before": null,
    "declaration-colon-newline-after": "always-multi-line"
  }
}
