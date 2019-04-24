import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      errorInfo: null,
    }
  }

  //   static getDerivedStateFromError(error) {}

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    })
  }

  render() {
    const { error, errorInfo } = this.state
    return (
      <>
        {error ? (
          <>
            <div>Something went wrong!</div>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              <div>{error.toString()}</div>
              <div>{errorInfo.componentStack}</div>
            </details>
          </>
        ) : (
          this.props.children
        )}
      </>
    )
  }
}

export { ErrorBoundary }
export default ErrorBoundary
