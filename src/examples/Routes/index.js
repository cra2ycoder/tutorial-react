import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

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

/**
 * @description
 * loading with lazy + routes
 */
const LazyHome = lazy(() => import('./pages/Home'))
const LazyAbout = lazy(() => import('./pages/About'))

class RoutesWithLazy extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route exact path="/" component={LazyHome} />
            <Route path="/about" component={LazyAbout} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <>
    <Routes />
    <RoutesWithLazy />
  </>,
  document.getElementById('routes')
)
