import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

// const Home = lazy(() => import('./pages/Home'))
// const About = lazy(() => import('./pages/About'))

/**
 * @description
 * normal loading with routers
 */
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

ReactDOM.render(<Routes />, document.getElementById('routes'))
