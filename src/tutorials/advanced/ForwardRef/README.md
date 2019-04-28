# Forward Ref

- Ref forwarding is a technique
- automatically passing a `ref` through a component to one of its children

## usage

```jsx
// declaring
const EmailInput = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} />
})
```

```jsx
// using
this.emailRef = React.createRef()
<EmailInput ref={this.emailRef} placeholder="enter email" />
```

## example

- refer: `index.js` file
