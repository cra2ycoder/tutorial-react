# Handling Events

- react handle events == DOM events
- only two differences
  - event names are in `camelCase`
  - Uses function name instead of `string` function name

## Event Function Types

```jsx
function handleClick1() {}
function handleClick2(e) {}
function handleClick3(e, id) {}
function handleClick4(e) {}
function handleClick5(e, id) {}
const handleClick6 = e => {}
```

```jsx
<button onClick={handleClick1}>Submit</button>
<button onClick={e => handleClick2(e)}>Submit</button>
<button onClick={e => handleClick3(e, id)}>Submit</button>
<button onClick={handleClick4.bind(this)}>Submit</button>
<button onClick={handleClick5.bind(this, id)}>Submit</button>
<button onClick={handleClick6}>Submit</button>
```

- For more details: EventFunctionType.jsx

**NOTE:**

- `preventDefault` should be done manually
