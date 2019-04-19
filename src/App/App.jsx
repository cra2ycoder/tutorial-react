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
