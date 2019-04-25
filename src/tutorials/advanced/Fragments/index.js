import React from 'react'
import ReactDOM from 'react-dom'

/**
 * @type1
 * default fragment
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
 * short syntax fragment
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

class KeyedFragment extends React.Component {
  static defaultProps = {
    list: [{ id: 1 }, { id: 2 }, { id: 3 }],
  }
  render() {
    const { list } = this.props
    return (
      <ul>
        {list &&
          list.map(item => {
            const { id } = item
            return (
              <React.Fragment key={'key-' + id}>
                <li>{id}</li>
              </React.Fragment>
            )
          })}
      </ul>
    )
  }
}

ReactDOM.render(
  <>
    <DefaultFragment />
    <hr />
    <ShortSyntaxFragment />
    <hr />
    <KeyedFragment />
  </>,
  document.getElementById('fragments')
)
