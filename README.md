# react-ts-boilerplate

A boilerplate to start writing your React ⚛️ application in Typescript (𝖳𝖲) with

- Jest 🧪
- Eslint 🚨
- Prettier 💄
- Husky 👮🏽‍♀️
- Ramda ⒡

all setup and ready to use out of the box!

Spend less time on configuring your project 🛠⚙️ and start writing some code 😎

# Getting started

### Prerequisites

- [node](https://nodejs.org/en/), Run ` node --version` in terminal to verify
- npm comes with node

## Installation

Clone the repository

```shell
$ git clone https://github.com/ooanishoo/react-ts-boilerplate
$ cd react-ts-boilerplate
```

### Run the Application

- Run `npm install` to install package dependencies.
- Run `npm start` to start the app in the development mode.

  - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  - The page will reload if you make edits.
  - You will also see any lint errors in the console.

- Run `npm run build` to build the app for production to the `build` folder.

# Settings

- ### Environment variables
  If you require any environment variables, create a `.env` file in the root folder of the project and set the variable name starting with `REACT_APP_API_XXX`

### Example:

```shell
REACT_APP_API_API_ENDPOINT=https://example.com/api
```

- ### Change the title of the project
  Go to `react-ts-boilerplate/public/index.html` and set the name of your project

```shell
<title>Project Name</title>
```

# Pre-installed Packages

### Eslint

- `eslint`: The core ESLint linting library
- `eslint-plugin-react `
- `@typescript-eslint/parser`: The parser that will allow ESLint to lint TypeScript code
- `@typescript-eslint/eslint-plugin`: A plugin that contains a bunch of ESLint rules that are TypeScript specific
- `eslint-plugin-spellcheck`: eslint plugin to spell check words on identifiers, Strings and comments of javascript files.

### Prettier

- `prettier`: The core prettier library
- `eslint-config-prettier`: Disables ESLint rules that might conflict with prettier
- `eslint-plugin-prettier`: Runs prettier as an ESLint rule

### Ramda

- `ramda`: A practical functional library for JavaScript programmers.
- `@types/ramda`: This package contains type definitions for ramda
