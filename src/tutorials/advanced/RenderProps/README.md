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
- External Render Props: `ExternalRenderProps.jsx`
- Using `children` as Render Prop: `ChildrenRenderProp.jsx`
