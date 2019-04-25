# Fragments

- group the set of DOM elements without extra node

## core pieces

- default fragment

```jsx
// default
<React.Fragment>{`children component/dom goes here`}</React.Fragment>
```

- short syntax fragment

```jsx
// shorthand
<>{`children component/dom goes here`}</>
```

- keyed fragment

```jsx
<dl>
  {list.map(item => (
    // Without the `key`, React will fire a key warning
    <React.Fragment key={item.id}>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </React.Fragment>
  ))}
</dl>
```

## Note

- any attribute cant be passed through the `short syntax` fragment

## example

```jsx
<React.Fragment>
  <h1>Header</h1>
  <h2>Subtitle</h2>
  <p>Fragment used to group the set of children without extra node</p>
</React.Fragment>
```

```jsx
<>
  <h1>Header</h1>
  <h2>Subtitle</h2>
  <p>Fragment used to group the set of children without extra node</p>
</>
```
