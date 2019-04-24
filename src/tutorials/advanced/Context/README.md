# Context

- provides a way to **pass data** through the **component tree**

## Core Pieces

- [React.createContext()](https://reactjs.org/docs/context.html#reactcreatecontext)
- [Context.Provider](https://reactjs.org/docs/context.html#contextprovider)
- [Context.Consumer](https://reactjs.org/docs/context.html#contextconsumer)
- [Class.contextType](https://reactjs.org/docs/context.html#classcontexttype)

## When to use Context?

- when require to share same property to all or some of the children from the main(parent) component

```jsx
const themeName = 'black'
<ParentComponent theme={themeName}>
  <ChildrenA theme={themeName}/>
  <ChildrenB theme={themeName}/>
  <ChildrenC theme={themeName}/>
</ParentComponent>
```

- in the above example, we can see that `theme` property has shared with all the components and looks duplicate as well. To avoid this we need to use `Context`

- see the below example how this works in `Context`

```jsx
// declaring the context
const ThemeContext = createContext({})

/**
 * @description
 * consider that ChildrenA, ChildrenB and ChildrenC
 * have the below code in the return
 * */
<ThemeContext.Consumer>
  {props => {
    const { theme } = props
    return <div className={theme}>{theme}</div>
  }}
</ThemeContext.Consumer>

/**
 * @description
 * parent (main) component
 * */
const themeProps = { theme: 'black' }
<ThemeContext.Provider value={themeProps}>
  <ChildrenA />
  <ChildrenB />
  <ChildrenC />
</ThemeContext.Provider>
```

## React.createContext()

- declare the context object first

```jsx
const MyContext = createContext({})
```

- **createContext()** will return the set of properties but we are going to use mainly two objects

  - **Provider**

    - required to use in the parent component

  - **Context**

    - required to use in the children components

## Context.Provider

- type 1

```jsx
const props = { theme: 'black' }
<MyContext.Provider value={props}>
  // children components will be added here
</MyContext.Provider>
```

- type 2

```jsx
const { Provider } = MyContext
const props = { theme: 'black' }
<Provider value={props}>
  // children components will be added here
</Provider>
```

## Context.Consumer

- type 1

```jsx
<MyContext.Consumer>
  {props => {
    const { theme } = props
    // add additional statements
    return <div>{theme}</div>
  }}
</MyContext.Consumer>
```

- type 2

```jsx
const { Consumer } = MyContext
<Consumer>
  {props => {
    const { theme } = props
    // add additional statements
    return <div>{theme}</div>
  }}
</Consumer>
```

## Class.contextType

- **NO NEED** to add provider instead

  - outside of the class

  ```jsx
  Class.contextType = Context
  ```

  - inside of the class

  ```jsx
  static contextType = Context
  ```

- we can the read the context by using `this.context`
- to read the property `this.context.[propName]`

```jsx
const ClassContextObject = createContext({
  theme: 'black',
})

const ClassChildren = () => {
  return (
    <ClassContextObject.Consumer>
      {props => {
        console.log(props)
        return <div>test</div>
      }}
    </ClassContextObject.Consumer>
  )
}
```

- type 1

```jsx
class ClassContext extends React.Component {
  componentWillMount() {
    console.log(this.context)
  }
  componentDidMount() {
    console.log(this.context)
  }
  render() {
    console.log(this.context)
    return <ClassChildren />
  }
}

// assigning the context with class
ClassContext.contextType = ClassContextObject
```

- type 2

```jsx
class ClassContext extends React.Component {
  static contextType = ClassContextObject
  render() {
    console.log(this.context)
    return <ClassChildren />
  }
}
```

---

## Notes

- We can use **Multiple provider** in one component
- We can use **Multiple consumer** in one component

## Free JSON API Placeholder

https://jsonplaceholder.typicode.com/
https://jsonplaceholder.typicode.com/users
