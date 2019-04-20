import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'

const LazyComponent = lazy(() => import('./LazyComponent'))
const DummyComponent = lazy(() => import('./DummyComponent'))

class CodeSplitting extends React.Component {
  render() {
    return (
      <>
        <Suspense fallback={<div>lazy loading...</div>}>
          <LazyComponent />
        </Suspense>
        <Suspense fallback={<div>dummy loading...</div>}>
          <DummyComponent />
        </Suspense>
      </>
    )
  }
}

ReactDOM.render(<CodeSplitting />, document.getElementById('code-split'))
