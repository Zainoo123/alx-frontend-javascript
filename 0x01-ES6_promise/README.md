# ES6 Promises

## Description

This project focuses on understanding and utilizing ES6 Promises in JavaScript. You will learn how to handle asynchronous operations using Promises, `then`, `catch`, `resolve`, and other methods. Additionally, you will explore `async` and `await` functions, and how to handle errors with `try` and `throw`.

## Learning Objectives

By the end of this project, you should be able to:

- Explain Promises: what they are, why and how to use them.
- Utilize the `then`, `resolve`, and `catch` methods.
- Use every method of the Promise object.
- Handle errors with `throw` and `try`.
- Use the `await` operator.
- Implement `async` functions.

## Requirements

- Your code will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Use allowed editors: `vi`, `vim`, `emacs`, Visual Studio Code.
- End all your files with a new line.
- Include a `README.md` file at the root of the project folder.
- Use the `.js` extension for your code.
- Test your code with Jest using `npm run test`.
- Verify your code against lint using ESLint.
- Export all of your functions.

## Setup

### Install NodeJS 12.11.x

Run the following commands in your home directory:

```sh
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Verify installation:

```sh
nodejs -v
# v12.11.1

npm -v
# 6.11.3
```

### Install Jest, Babel, and ESLint

In your project directory, use the supplied `package.json` and run:

```sh
npm install
```

## Configuration Files

### package.json

<details>
<summary>Click to show/hide file contents</summary>

```json
{
  "name": "es6-promises",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "lint": "eslint ."
  },
  "dependencies": {
  },
  "devDependencies": {
    "@babel/cli": "^7.8.4",
    "@babel/core": "^7.8.4",
    "@babel/preset-env": "^7.8.4",
    "babel-jest": "^25.1.0",
    "eslint": "^6.8.0",
    "jest": "^25.1.0"
  },
  "author": "",
  "license": "ISC"
}
```

</details>

### babel.config.js

<details>
<summary>Click to show/hide file contents</summary>

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

</details>

### utils.js

<details>
<summary>Click to show/hide file contents</summary>

```js
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}

export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
```

</details>

### .eslintrc.js

<details>
<summary>Click to show/hide file contents</summary>

```js
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:jest/recommended'],
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
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
  },
};
```

</details>

## Response Data Format

### uploadPhoto Response

```json
{
  status: 200,
  body: 'photo-profile-1'
}
```

### createUser Response

```json
{
  firstName: 'Guillaume',
  lastName: 'Salva'
}
```

## Project Timeline

- **Project Start:** Jun 25, 2024, 4:00 AM
- **Project End:** Jun 27, 2024, 4:00 AM
- **Checker Release:** Jun 25, 2024, 4:00 PM
- **Auto Review:** Launched at the deadline

## Resources

Read or watch:

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An Introduction](https://developers.google.com/web/fundamentals/primers/promises)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
