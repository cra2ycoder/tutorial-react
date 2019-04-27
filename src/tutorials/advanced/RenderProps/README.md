# Render Props

- its a technique
- share the code between the components
- uses a function and it will be passed through component props
- the function should return a `element`

## Use cases

- mainly very helpful on the UI customization
- provides re-usability
- overwritting is so simple

## Syntax

```jsx
const renderPanel = () => {
  return <div className="panel" />
}
```

```jsx
<Component renderPanel={renderPanel} />
```

## example

Refer the example files:

- Internal Render Props: `InternalRenderProps.jsx`

  - using render props function inside the `class`

- External Render Props: `ExternalRenderProps.jsx`

  - using render props functions in different file for re-usable

- Using `children` as Render Prop: `ChildrenRenderProp.jsx`

  - using react composition technique, reading a children
  - this technique only required when the entire children needs to be changed except the wrapper
