module.exports = {
  globals: {},
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    parser: '@babel/eslint-parser'
  },
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  extends: [
    'airbnb-base',
    'plugin:vue/essential',
  ],
  rules: {
    'import/extensions': [
      'off',
      'always',
      {
        js: 'never',
        vue: 'never'
      }
    ],
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: [
          'test/unit/index.js'
        ]
      }
    ],
    semi: 'off',
    'no-param-reassign': 'off',
    'no-return-assign': 'off',
    'guard-for-in': 'warn',
    'consistent-return': 'off',
    'no-shadow': 'warn',
    'import/first': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-use-before-define': 'off',
    'no-case-declarations': 'warn',
    'no-underscore-dangle': 'off',
    camelcase: 'warn',
    yoda: 'error',
    'comma-dangle': 'off',
    'no-mixed-operators': 'warn',
    'no-unused-expressions': 'off',
    'no-plusplus': 'off',
    'no-tabs': [
      'error'
    ],
    'object-shorthand': [
      'error'
    ],
    'one-var': [
      'error',
      'never'
    ],
    'padded-block': 'off',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'error',
    'quote-props': [
      'error',
      'as-needed'
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    radix: 'off',
    'space-before-blocks': [
      'error',
      'always'
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForOfStatement',
        message: 'for...of is not allowed'
      }
    ],
    'max-len': [
      'warn',
      {
        comments: 120,
        code: 200
      }
    ],
    'no-restricted-globals': 'off',
    'prefer-destructuring': 'error',
    'prefer-promise-reject-errors': 'off',
    'class-methods-use-this': 'off',
    'new-cap': 'warn',
    'import/no-named-as-default-member': 'warn',
    'no-continue': 'warn',
    'import/prefer-default-export': 'warn',
    'arrow-parens': 'off',
    'no-fallthrough': 'warn',
    'no-restricted-properties': 'warn',
    'array-callback-return': 'warn',
    'func-names': 'off',
    'no-bitwise': 'warn',
    'object-curly-newline': 'off',
    'global-require': 'off',
    'no-unused-vars': 'error',
    'vue/require-v-for-key': 'off',
    'vue/html-indent': ['error', 2, {
      alignAttributesVertically: false,
    }],
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/valid-v-for': 'off',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/html-self-closing': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/attributes-order': 'off',
    'vue/require-default-prop': 'off',
    'vue/order-in-components': 'off',
    'vue/require-prop-types': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 1
      }
    }],
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    'vue/no-side-effects-in-computed-properties': 'warn',
    'function-paren-newline': ['error', 'multiline'],
    'dot-location': 'off',
    'dot-notation': 'warn',
    'no-throw-literal': 'warn',
    'comma-spacing': 'warn',
    'prefer-template': 'warn',
    'newline-per-chained-call': 'off',
    'import/no-dynamic-require': 'warn',
    'arrow-body-style': 'warn',
    'no-new-func': 'warn',
  }
}
