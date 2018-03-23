// https://github.com/yannickcr/eslint-plugin-react
module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    node: true
  },
  globals: {
    jest: true,
    mount: true,
    render: true,
    shallow: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 6,
    sourceType: 'module'
  },

  plugins: ['react', 'import'],

  // Any customization we want to override
  rules: {
    'array-callback-return': 0,
    'arrow-parens': 0,
    'class-methods-use-this': 0,
    'comma-dangle': ['error', 'never'],
    'consistent-return': ['warn', { treatUndefinedAsUnspecified: false }],
    'import/prefer-default-export': 1,
    'no-restricted-globals': ['error', 'event', 'fdescribe'],
    quotes: ['warn', 'single'],
    'react/forbid-prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react/require-default-props': 0,
    'react/sort-comp': [
      1,
      {
        order: ['static-methods', 'lifecycle', 'everything-else', 'render']
      }
    ],
    'jsx-a11y/no-static-element-interactions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'new-cap': [
      'error',
      {
        capIsNew: false,
        capIsNewExceptions: ['CSSModules', 'Schema', 'React'],
        newIsCapExceptions: ['events']
      }
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: []
      }
    ],
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never'
      }
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: true
      }
    ],
    'space-in-parens': ['error', 'never'],
    'template-curly-spacing': ['error', 'never']
  },

  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js'
      }
    }
  }
};
