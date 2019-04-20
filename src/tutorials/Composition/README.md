# composition

- At Facebook, was not found any use case of inheritance
- so, introduced Composition
- `props.children` in bound with props in the all components
- so, when the component using like a HTML tag, those tags inside the component will be considered as children

```jsx
/**
 * @description
 * simple dialog box
 */
class DialogBox extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <title>Dialog Box Title</title>
        {children}
      </div>
    )
  }
}

/**
 * @description
 * alert component which uses DialogBox component
 */
class Alert extends React.Component {
  render() {
    return (
      <DialogBox>
        <div>Alert</div>
        <div>I am from alert box component</div>
        <button>OK</button>
        <button>CANCEL</button>
      </DialogBox>
    )
  }
}
```
