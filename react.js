module.exports = {
  extends: ['@microverse-network', 'plugin:react/recommended'],
  plugins: ['jest', 'react'],
  env: {
    'jest/globals': true,
    mocha: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'warn',
    'jest/no-identical-title': 'error',
    'react/jsx-no-bind': ['error', { ignoreRefs: true }],
    'react/jsx-no-duplicate-props': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-string-refs': 'error',
    'react/no-unknown-property': ['error', { ignore: ['class', 'for'] }],
    'react/prefer-es6-class': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/jsx-curly-spacing': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
}
