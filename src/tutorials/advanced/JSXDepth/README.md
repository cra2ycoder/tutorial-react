# JSX in Depth

## Dot-Notation

```jsx
const CollectionComponent = {
  Image: function Image(props) {
    return <img src={props.imageUrl} />
  },
  Header: function Header(props) {
    return <h1>{props.content}</h1>
  },
}

<CollectionComponent.Image imageUrl="https://via.placeholder.com/150" />
<CollectionComponent.Header content="This is Heading!" />
```

## User-Defined Components Must Be Capitalized

- `small case letters` will be considered as a default html tag so it wont render the correct component

```jsx
// wrong
<mycomponent url="https://via.placeholder.com/150" />

// correct
<MyComponent url="https://via.placeholder.com/150" />
```

## Dynamic Rendering Component

- type 1

```jsx
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

// usage
<DynamicRenderComponent type="image" url="https://via.placeholder.com/75" />
<DynamicRenderComponent type="header" />
<DynamicRenderComponent type="paragraph" />
```

- type 2

```jsx
import * as ComponentsLibrary from './Components'

function DynamicRenderWithImport(props) {
  const { type, ...remainingProps } = props
  const Component = ComponentsLibrary[type]
  return <Component {...remainingProps} />
}

// usage
<DynamicRenderWithImport
    type="Image"
    url="https://via.placeholder.com/75"
/>
<DynamicRenderWithImport type="Header" />
<DynamicRenderWithImport type="Paragraph" />
```

## Empty Results

```jsx
<div />
<div>{false}</div>
<div>{null}</div>
<div>{undefined}</div>
<div>{true}</div>

// output for the above use above will be
<div></div>
```
