import React from 'react'
import ReactDOM from 'react-dom'

/**
 * @type1
 */
class DefaultFragment extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Header</h1>
        <h2>Subtitle</h2>
        <p>Fragment used to group the set of children without extra node</p>
        <p>this is render via default syntax</p>
      </React.Fragment>
    )
  }
}

/**
 * @type2
 */
class ShortSyntaxFragment extends React.Component {
  render() {
    return (
      <>
        <h1>Header</h1>
        <h2>Subtitle</h2>
        <p>Fragment used to group the set of children without extra node</p>
        <p>this is render via short syntax</p>
      </>
    )
  }
}

ReactDOM.render(
  <>
    <DefaultFragment />
    <hr />
    <ShortSyntaxFragment />
  </>,
  document.getElementById('fragments')
)
