# my-js-react-app

- js-project-setup + react installed
- for any react based application which needs to be worked in the javascript then we can use this repo

---

## cloning

- clone the `js-project-setup`

```
git clone https://cra2ycoder@github.com/cra2ycoder/js-project-setup.git
```

- move the all files into root directory
- and the checkin the files

---

## enabling eslint support for react

- adding this package as `devDependencies` in `package.json` file as this required only for development purpose

```js
{
  "devDependencies": {
    "eslint-plugin-react": "7.12.4"
  },
}
```

- then, run the following command for installing

```
yarn install
```

- configure this plugin with extends property in `.eslintrc.json`

```js
{
  "extends": [
    "plugin:prettier/recommended",
    "plugin:react/recommended"
  ],
}
```

---

## enabling babel support for react

- adding this package as `devDependencies` in `package.json` file as this required only for development purpose

```js
{
  "devDependencies": {
    // core support
    "@babel/preset-react": "7.0.0",
    // to use class object transpile
    "@babel/plugin-proposal-class-properties": "7.4.0"
  },
}
```

- then, run the following command for installing

```
yarn install
```

- configure this plugins and preset with extends property in `.babelrc`

```js
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

---

## install core react

- adding this package as `dependencies` in `package.json` file as this required only for development purpose

```js
{
  "devDependencies": {
    "react": "16.8.6",
    "react-dom": "16.8.6"
  },
}
```

- then, run the following command for installing

```
yarn install
```

---

## Add App.jsx file for entry

- create a file named as `App.jsx` in the `App` folder
- Add some basics scripts

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  static defaultProps = {}
  render() {
    return (
      <>
        <div>Hello, Welcome!</div>
        <div>My First React App</div>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
```

- change entry path in the webpack config in both dev and prod

```js
module.exports = {
  entry: './src/App/App.jsx',
}
```

- save and run the following command

```
make serve-dev
```

---

## Add react typings

- this package is more helpful on the `auto intellisense`
- saves dev times

- adding this package as `devDependencies` in `package.json` file as this required only for development purpose

```js
{
  "devDependencies": {
    "@types/react": "16.8.13",
    "@types/react-dom": "16.8.4"
  },
}
```

- then, run the following command for installing

```
yarn install
```
