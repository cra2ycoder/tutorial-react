# Error Handling

- in JSX, `try and catch` doesn't works inside the model
- so, error boundary created to achieve that
- why its does not work because:
  - as react works with `virtual dom` and requires to wait for the changes from the components before its getting to update to the real DOMs
  - this is process basically doing by the react in async way

```jsx
// this won't works
<div>
  {
    try {
        <Component />
    } catch(error){
        handleChildError(error)
    }
  }
</div>
```

## core pieces

- requires `class` component
- two main life cycle method should require to use

  - `static getDerivedStateFromError()`

    - used to render UI, for error indication after error thrown

  - `componentDidCatch()`

    - catch and log the errors

## Where Error Boundary does not work?

- Event Handlers
- `setTimeout` or `requestAnimationFrame` callbacks.
- Server side rendering (SSR)
- Errors thrown in the error boundary itself, rather than in its children.

## Usage
