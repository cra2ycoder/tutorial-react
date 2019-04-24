# Context

- provides a way to **pass data** through the **component tree**

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

const ThemeContext = createContext({})

// consider that ChildrenA, ChildrenB and ChildrenC
// have the below code in the return
<ThemeContext.Consumer>
  {props => {
    const { theme } = props
    return <div className={theme}>{theme}</div>
  }}
</ThemeContext.Consumer>

// parent (main) component
const themeProps = { theme: 'black' }
<ThemeContext.Provider value={themeProps}>
  <ChildrenA />
  <ChildrenB />
  <ChildrenC />
</ThemeContext.Provider>
```

## How to use?

- declare the context object first
- **createContext()** will return the set of properties but we are going to use mainly two objects

  - **Provider**

    - required to use in the parent component

  - **Context**

    - required to use in the children components

```jsx
const MyContext = createContext({})
```

- using **Provider**

  - type 1

  ```jsx
  <MyContext.Provider value={props}>
    // children components will be added here
  </MyContext.Provider>
  ```

  - type 2

  ```jsx
  const { Provider } = MyContext
  <Provider value={props}>
    // children components will be added here
  </Provider>
  ```

---

## Free JSON API Placeholder

https://jsonplaceholder.typicode.com/
https://jsonplaceholder.typicode.com/users
