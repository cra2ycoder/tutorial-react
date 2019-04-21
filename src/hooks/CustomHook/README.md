# Custom Hook

- Building our own hook is called custom hook
- making re-usable function components with independent state handling
- returning the state to another components as a value
- passing as a argument to one component to another component

## Rules to be followed

- `use` word should be used as `prefix` of the function that we are declaring for reusable
- as hooks looking for that one to consider as custom function

## example

```jsx
function useFromInput(initialValue) {
  // state
  const [value, setValue] = useState(initialValue)

  // handle change
  function handleChange(e) {
    setValue(e.target.value)
  }

  return {
    value,
    onClick: handleChange,
  }
}

// usage
const firstName = useFromInput('john')
const lastName = useFromInput('doe')

// placing with the dom
<form>
    <input
        name="firstName"
        placeholder="Enter your first name"
        onChange={firstName.onClick}
    />
    <input
        name="lastName"
        placeholder="Enter your last name"
        onChange={lastName.onClick}
    />
</form>
```
