import React from 'react'
import ReactDOM from 'react-dom'

/**
 * @description
 * DOT-NOTATION
 */

const CollectionComponent = {
  Image: function Image(props) {
    return <img src={props.imageUrl} />
  },
  Header: function Header(props) {
    return <h1>{props.content}</h1>
  },
}

/**
 * @description
 * User-Defined Components Must Be Capitalized
 */

function image(props) {
  return <img src={props.url} />
}

ReactDOM.render(
  <>
    <CollectionComponent.Image imageUrl="https://via.placeholder.com/150" />
    <CollectionComponent.Header content="This is Heading!" />
    <image url="https://via.placeholder.com/150" />
  </>,
  document.getElementById('jsx-depth')
)
