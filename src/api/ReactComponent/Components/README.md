# React Components

- React components can be created via `functions` or `classes`
- `class` provides more features which are following below:

  - **Lifecycle methods**
  - **Other APIs**
  - **Class Properties**
  - **Instance Properties**

## Lifecycle methods

here is the lifecycle flow, on the different state:

- **Mounting**

  - `constructor()` ➡ `static getDerivedStateFromProps()` ➡ `render()` ➡ `componentDidMount()`

- **Updating**

  - `static getDerivedStateFromProps()` ➡ `shouldComponentUpdate()` ➡ `render()` ➡ `getSnapshotBeforeUpdate()` ➡ `componentDidUpdate()`

- **Unmounting**

  - `componentWillUnmount()`

- **Error Handling**

  - `static getDerivedStateFromError()` ➡ `componentDidCatch()`

## Other APIs

- `setState()`

  - used to update the state

- `forceUpdate()`

  - forcing the component to update, this will lead some performance issue, so please be avoiding

## Class Properties

- `defaultProps`
  - used to define the default properties
- `displayName`
  - display name is used for debugging purpose
  - normally, it wont required, but if we wanted to set different name for the component then we can set by using this props

## Instance Properties

- `this.props`

  - to access the component properties

- `this.state`

  - to access the state properties
