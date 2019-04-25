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
 *
 * react will throw a error warning of the below usage
 */
// <image url="https://via.placeholder.com/150" />

/**
 * @description
 * dynamic component rendering
 */
const Header = props => <h1>Header</h1>
const Paragraph = props => <p>This is paragraph!</p>
const Image = props => <img src={props.url} />

function DynamicRenderComponent(props) {
  const { type, ...remainingProps } = props
  const components = {
    header: Header,
    paragraph: Paragraph,
    image: Image,
  }
  const Component = components[type]
  return <Component {...remainingProps} />
}

ReactDOM.render(
  <>
    <CollectionComponent.Image imageUrl="https://via.placeholder.com/150" />
    <CollectionComponent.Header content="This is Heading!" />
    <hr />
    <DynamicRenderComponent type="image" url="https://via.placeholder.com/75" />
    <DynamicRenderComponent type="header" />
    <DynamicRenderComponent type="paragraph" />
    <hr />
  </>,
  document.getElementById('jsx-depth')
)
