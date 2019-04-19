## React.CreateElement

    - used to create html dom

## syntax

```jsx
React.createElement(tagname[string], tagattr[object], children[string | doms])
```

## examples

- code

```jsx
React.createElement(
  'h3',
  {
    className: 'cls-react-cl',
    id: 'react-id',
    onClick: () => {
      console.log('h3 clicked!')
    },
  },
  'message'
)
```

- result

```html
<h3 id="react-id" class="cls-react-cl">message</h3>

// when clicking on the dom that will print `h3 clicked`
```
