module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
      'strict': ['error', 'global'],
      'multiline-comment-style': ['error', 'starred-block'],
      'spaced-comment': ['error', 'always'],
      // always a semicolon at the end
      'semi': ['error', 'always'],
      // no space before semicolons
      'semi-spacing': 'error',
      // no extra semicolons
      'no-extra-semi': 'error',
      // no multilines for a single line
      'no-unexpected-multiline': 'error',
      // the max length of a line in the editor
      'max-len': ['error', {'code': 100}],
      // Commas to terminate the lines (...arrays)
      'comma-style': ['error', 'last'],
      // the last element has a terminate comma
      'comma-dangle': ['error', 'always-multiline'],
      // indentation with spaces
      'indent': ['error', 2],
      // Spaces after and before opperators
      'space-infix-ops': 'error',
      // Add spaces before blocks (if, while) & No single openning bracket
      'space-before-blocks': 'error',
      'brace-style': 'error',
      // Space after a if,for  & Spaces for arrow function
      'keyword-spacing': 'error',
      'arrow-spacing': 'error',
      // Space for functions
      'space-before-function-paren': ['error', {'anonymous':   'always', 'named': 'never', 'asyncArrow': 'always'}],
      // Indent method chains
      'newline-per-chained-call': 'error',
      // Space in enclosing characters
      'space-in-parens': ['error', 'never'],
      'array-bracket-spacing': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      //
      'comma-spacing': ['error', {'before': false, 'after': true}],
      'no-multiple-empty-lines': ['error', {'max': 1, 'maxEOF':1}],
      'no-undef': 'off'
    }
};
