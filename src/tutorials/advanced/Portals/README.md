# Portals

- used to render DOM's outside of the component/app
- like rendering the DOM's which are in the html body not in the same component

## syntax

```jsx
ReactDOM.createPortal(child, container)
```

- **child:** a DOM(s) / Component
- **container:** a parent element which is used to add the child's

## usage

```jsx
function Modal(props) {
  return <div>Modal Message!</div>
}

ReactDOM.createPortal(<Modal />, document.body)
```

## example

- ![](https://cdn-images-1.medium.com/max/1600/1*WPBrzCW80is_tZ08DSQAag.gif)
