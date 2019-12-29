module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    'plugin:prettier/recommended',
    'javascript-the-good-parts'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'prettier',
    'react'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  }
}
