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
