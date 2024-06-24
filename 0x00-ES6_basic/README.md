# 0x00. ES6 Basics

## JavaScript | ES6
**Weight**: 1

**Project Duration**: 
- Start: Jun 24, 2024, 4:00 AM
- End: Jun 25, 2024, 4:00 AM

**Checker Release**: Jun 24, 2024, 10:00 AM

**Auto Review Launch**: At the project deadline

## Concepts

For this project, we expect you to review the following concepts:

- JavaScript programming
- Software Linter

## Resources

Read or watch the following resources:

- [ECMAScript 6 - ECMAScript 2015](https://www.ecma-international.org/ecma-262/6.0/)
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Demystifying ES6 Iterables & Iterators](https://www.sitepoint.com/demystifying-es6-generators-iterators/)

## Learning Objectives

By the end of this project, you should be able to explain the following without external resources:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and default parameters in functions
- Rest and spread function parameters
- String templating in ES6
- Object creation and properties in ES6
- Iterators and for-of loops

## Requirements

### General

- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A `README.md` file at the root of the project folder is mandatory
- Code should use the `.js` extension
- Code will be tested using the Jest Testing Framework
- Code will be analyzed using the linter ESLint along with specific rules provided
- All functions must be exported

### Setup

#### Install NodeJS 12.11.x

In your home directory, execute the following commands:

```sh
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v  # Expected output: v12.11.1
npm -v     # Expected output: 6.11.3
```

#### Install Jest, Babel, and ESLint

In your project directory, use the supplied `package.json` and run `npm install`.

### Configuration Files

Add the following files to your project directory:

#### package.json

```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

#### babel.config.js

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

#### .eslintrc.js

```js
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```

### Final Steps

Don’t forget to run `npm install` from the terminal in your project folder to install all necessary dependencies.

```sh
npm install
```
