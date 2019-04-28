import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'

class SSR extends React.Component {
  render() {
    return (
      <>
        <h1>Title</h1>
        <p>This component is rendering through ReactDOMServer api!</p>
        <button>OK</button>
      </>
    )
  }
}

const htmlString = ReactDOMServer.renderToString(<SSR />)
console.log(htmlString)

// ReactDOM.render(htmlString, document.getElementById('react-dom-server'))
