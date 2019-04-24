import React from 'react'
import ReactDOM from 'react-dom'
import ErrorBoundary from './ErrorBoundary'

class CoolComponent extends React.Component {
  static defaultProps = {
    error: true,
  }
  render() {
    if (this.props.error) {
      throw new Error('this.props.error is true in Cool Component!')
    }
    return 'Hey, I am cool component!'
  }
}

class ErrorHandle extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <CoolComponent />
      </ErrorBoundary>
    )
  }
}

ReactDOM.render(<ErrorHandle />, document.getElementById('error-handle'))
