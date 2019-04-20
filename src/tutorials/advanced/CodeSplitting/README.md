# Code-Splitting

## Bundling

- how its working:
  - file -> looks for imports -> take the code based on it -> merge into one file

## Code-Splitting

- Bundle also grows, when our app code gets grow
- Make sure / Beware on bundling your code, that may slow down your app
- Always plan ahead for code-splitting before it gets grow.
- if you are using webpack: https://webpack.js.org/guides/code-splitting/
- this helps on the `lazy load` as well that improve the site performance

## React.Lazy

- Not yet available for `server side rendering (SSR)`
- code-splitting with SSR support: https://github.com/smooth-code/loadable-components

```jsx
// syntax
React.lazy(fn)

// returns Promise
// the importing component should have default export by default
React.lazy(() => import('./OtherComponent'))
```

## Suspense

- its just a loading indicator

```jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'))

class CodeSplitting extends React.Component {
  render() {
    return (
      <>
        <Suspense fallback={<div>loading...</div>}>
          <LazyComponent />
        </Suspense>
      </>
    )
  }
}
```

- in the above example, `loading...` will be shown until the component gets loaded
- `fallback` accepts any component
- can take multiple components with a single `Suspense` component assigned
- can have multiple `Suspense` in one component
