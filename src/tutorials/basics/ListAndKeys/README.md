# List and Keys

## Key

- helps to react to identify that
  - which item has changed, updated or removed
- key needs to be given on the item element
- use as a string for key names instead of number, it helps react to fetch the item easily
  - FYR: https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
- **NOTE:**
  - key is just for react reference so we cant see in it our DOM, only we will be see on the React DOM.
  - key always required to use inside the array, not passing as a argument to another component, or sharing with other function and add it
  - key must be `unique` - no duplicate keys
  - we can have same name only with different arrays not in the same array

---

# some example

- basic

```jsx
function renderList(list) {
  const items = list.map(num => {
    return <li key={'key' + num}>{num}</li>
  })
  return items
}
```

- inside component

```jsx
class ListAndKeys extends React.Component {
  render() {
    const { list } = this.props
    const items = list.map(num => {
      return <li key={'key' + num}>{num}</li>
    })
    return <ul>{items}</ul>
  }
}
```

- embed list

```jsx
<ul>
  {list.map(num => (
    <li key={'key' + num}>{num}</li>
  ))}
</ul>
```
