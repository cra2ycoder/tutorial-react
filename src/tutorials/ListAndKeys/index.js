import React from 'react'
import ReactDOM from 'react-dom'

/**
 * @example
 * basic list
 */

class ListExample extends React.Component {
  render() {
    const { list } = this.props
    const updatedList = list.map(number => number * 2)
    return <div>{'[' + updatedList.join(', ') + ']'}</div>
  }
}

/**
 * @example
 * list with elements
 */

class ListAndKeys extends React.Component {
  render() {
    const { list } = this.props
    const items = list.map(num => {
      return <li key={'key' + num}>{num}</li>
    })
    return <ul>{items}</ul>
  }
}

/**
 * @example
 * embedding list
 */

class EmbedList extends React.Component {
  render() {
    const { list } = this.props
    return (
      <ul>
        {list.map(num => (
          <li key={'key' + num}>{num}</li>
        ))}
      </ul>
    )
  }
}

ReactDOM.render(
  <>
    <ListExample list={[1, 2, 3, 4, 6, 10]} />
    <ListAndKeys list={[1, 2, 3, 4, 6, 10]} />
    <EmbedList list={[11, 12, 13, 14, 16, 110]} />
  </>,
  document.getElementById('list-and-keys')
)
