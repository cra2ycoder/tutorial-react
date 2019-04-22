import React from 'react'
import ReactDOM from 'react-dom'
import '../tutorials'
// import '../examples'
// import '../hooks'

class App extends React.Component {
  static defaultProps = {}
  render() {
    return (
      <>
        <h3>Hello, Welcome!</h3>
        <h1>My First React App</h1>
        <br />
        <hr />
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
