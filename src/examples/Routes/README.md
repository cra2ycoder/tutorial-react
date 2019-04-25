# Routing

- add the following package in `dependencies`

```json
"dependencies": {
    "react-router-dom": "5.0.0"
},
```

- run the following command

```
yarn install
```

## React Router DOM

- this package is used to do routing with the browser
- it handles automatically based on the Route component
- life cycle:

  - url path -> matches with route component -> loads appropriate component

- three core objects
  - BrowseRouter
  - Switch
  - Route

## configure in webpack

- **IMPORTANT**: add the following property `historyApiFallback` in the webpack config

```js
module.exports = {
  devServer: {
    historyApiFallback: true,
  },
}
```

## Add Components in the Routing

```jsx
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    )
  }
}
```

- **BrowserRouter**

  - uses HTML5 `history` api
    - pushState
    - popState
    - replaceState
  - ^ handles this above all state to sync with URL and UI

- **Switch**

  - renders the first child that matches in the `Route` list
  - life cycle:
    - url path -> matches in the route components list -> stop looking -> Route component will load the component

- **Route**
  - most important component
  - life cycle:
    - matches === url path -> render the ui component
  - three major props to be used/recommended:
    - **exact**: matches the exact path (url === route.path)
    - **path**: url path that require to match when loading the component
    - **component**: ui component that required to render

## Reference Links

- https://reacttraining.com/react-router/web/api

## Example

![](https://cra2ycoder.sirv.com/tutorial-react/routes.gif)
