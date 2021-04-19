# react-ts-boilerplate

A boilerplate to start writing your React ⚛️ application in Typescript (𝖳𝖲) with

- Eslint 🚨
- Prettier 💄
- Husky 👮🏽‍♀️
- Jest 🧪
- Cypress 🚦
- Ramda ⒡
- Axios 🤙🏽

all setup and ready to use out of the box!

Spend less time on configuring your project 🛠⚙️ and start writing some code 😎

# Getting started

### Prerequisites

- [node](https://nodejs.org/en/), Run ` node --version` in terminal to verify
- npm comes with node

## Installation

### Clone the repository ⬇️

```shell
$ git clone https://github.com/ooanishoo/react-ts-boilerplate
$ cd react-ts-boilerplate
```

### Fork the repository and clone ⚓️

- On GitHub, navigate to the https://github.com/ooanishoo/react-ts-boilerplate repository.
- In the top-right corner of the page, click Fork.

<img width="407" alt="Screen Shot 2021-04-05 at 6 55 25 pm" src="https://user-images.githubusercontent.com/9260574/113556968-9eba1280-9640-11eb-96c6-61a106310b8a.png">

- On GitHub, navigate to your fork of the project and copy the git url. Then clone the repo.
- Example:

```shell
$ git clone https://github.com/YOUR_USERNAME/react-ts-boilerplate
$ cd react-ts-boilerplate
```

### Keep your fork synced 🤝

- If you wish to propose changes to this original repository [react-ts-boilerplate](https://github.com/ooanishoo/react-ts-boilerplate), it's a good practice to regularly sync your fork with the upstream repository.
- You can configure Git to pull changes from the original, or upstream, repository into the local clone of your fork.
- Go to your local forked repo and type `git remote -v` and press Enter. You'll see the current configured remote repository for your fork.

```shell
$ git remote -v
> origin  https://github.com/YOUR_USERNAME/react-ts-boilerplate.git (fetch)
> origin  https://github.com/YOUR_USERNAME/react-ts-boilerplate.git (push)
```

- Type the following command:

```
git remote add upstream https://github.com/ooanishoo/react-ts-boilerplate
```

- To verify the new upstream repository you've specified for your fork, type `git remote -v` again. You should see the URL for your fork as origin, and the URL for the original repository as upstream. It should look like this:

```shell
$ git remote -v
> origin    https://github.com/YOUR_USERNAME/react-ts-boilerplate.git (fetch)
> origin    https://github.com/YOUR_USERNAME/react-ts-boilerplate.git (push)
> upstream  https://github.com/ooanishoo/react-ts-boilerplate.git (fetch)
> upstream  https://github.com/ooanishoo/react-ts-boilerplate.git (push)
```

- Now, your your fork is synced 🎉with the upstream repository [react-ts-boilerplate](https://github.com/ooanishoo/react-ts-boilerplate)

### Run the Application

- Run `npm install` to install package dependencies.
- Run `npm start` to start the app in the development mode.

  - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  - The page will reload if you make edits.
  - You will also see any lint errors in the console.

- Run `npm run build` to build the app for production to the `build` folder.

### Run the Tests

- Run `npm test` to run Unit Tests
- Run `npm run e2e` to run end to end tests using Cypress.
  Make sure your app is running on port http://localhost:3000 before you run Cypress tests since the baseUrl for the test has been configured to port 3000

# Settings

- ### Environment variables
  If you require any environment variables, create a `.env` file in the root folder of the project and set the variable name starting with `REACT_APP_API_YOUR_VARIABLE_NAME`

### Example:

```shell
REACT_APP_API_API_ENDPOINT=https://example.com/api
```

Since this boilerplate shows how you can fetch data from external api, create a `.env` file in the root directory and copy the contents from `.env.example`

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

## Coming Soon: 👨🏽‍💻

- [Redux Tool Kit](https://redux-toolkit.js.org/) Implementation
- Graphql with [Apollo client](https://www.apollographql.com/docs/react/)

## Found this project useful ? ❤️

- Support by clicking the ⭐️ button on the upper right of this page.
- Feel free to follow me 🙌🏽 if you love these kind of projects.

## MIT License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/ooanishoo/react-ts-boilerplate/blob/main/LICENSE)
