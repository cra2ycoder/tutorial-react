# FAQ

- some useful FAQ for reference.

### How can I make an AJAX call?

- AJAX expands `Asynchronous JavaScript and XML`

- use can use:

  - [axios](https://github.com/axios/axios)

    - required to install a package `axios`

    ```jsx
    axios
      .get(url)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    ```

  - [Jquery Ajax](https://api.jquery.com/jQuery.ajax/)

  - [Window.fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

    - its inbuilt feature of `window` object

    ```jsx
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
    ```

### How can I write comments in JSX?

```jsx
<div>
  {/* Comment goes here */}
  Hello, {name}!
</div>
```

```jsx
<div>
  {/* It also works
  for multi-line comments. */}
  Hello, {name}!
</div>
```

### How to set style?

- inline

```jsx
const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')',
}

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>
}
```

```jsx
// Result style: '10px'
<div style={{ height: 10 }}>
  Hello World!
</div>

// Result style: '10%'
<div style={{ height: '10%' }}>
  Hello World!
</div>
```

- using `classNames`

```css
/* styled.css */
.hello-world {
  color: red;
}
```

```jsx
import './styled.css'

function HelloWorldComponent() {
  return <div className="hello-world">Hello World!</div>
}
```

**NOTE:** CSS classes are generally better for performance than inline styles.

- using `css-in-js`

  - https://github.com/MicheleBertoli/css-in-js

### What is the right way to do setState?

There are two ways to update the state in React using setState.

- Object Type
- Function Type

**Object Type:**

```jsx
this.setState({ count: this.state.count + 1 })
```

this will not update value in the global state object, and so it always rendering the component for the same value even we called for N number times.

---

**Function Type:**

```jsx
this.setState(state => {
  // Important: read `state` instead of `this.state` when updating.
  return { count: state.count + 1 }
})
```

This is the right way to update the state since we will be receiving the current state from the argument.

### Props vs State

|                                              | _props_ | _state_ |
| -------------------------------------------- | ------- | ------- |
| Can get initial value from parent Component? | Yes     | Yes     |
| Can be changed by parent Component?          | Yes     | No      |
| Can set default values inside Component?     | Yes     | Yes     |
| Can change inside Component?                 | No      | Yes     |
| Can set initial value for child Components?  | Yes     | Yes     |
| Can change in child Components?              | Yes     | No      |

#### Component types

- **Stateless Component**
  — Only _props_, no _state._

- **Stateful Component**
  — Both _props_ and _state._
  - We also call these _state managers_.

### Which is the best way to bind an events to the component?

**Better Way:**

```jsx
<Button onclick={this.handleClick()} />
<Button onclick={() => this.handleClick()} />
<Button onclick={this.handleClick.bind(this)} />
```

above are the ways will lead performance implications as its creating a new functions when the component renders / re-renders

**Best Way:**

```jsx
<Button onclick={this.handleClick} />
```

passing as reference will be always good

### How we can prevent a function from being called multiple times?

There are two good ways to do this in React. They are:

- Throttling
- DeBouncing

**Throttling:**

```jsx
// syntax:
throttle(ourFunction, timeInMilliSeconds)

// example:
throttle(onMouseScrolling, 1000)
```

A function will be called on each interval time until the event completes.
To be in simple, its like setInterval, only difference is setInterval will not be stopped until that clears, but this will be stopped automatically when the event gets completed.

**Ex:** While mouse scrolling - If we wanted to get to a function call on some interval time continuously then. Throttle will be the best choice!

---

**Debouncing:**

```jsx
// syntax:
debounce(ourFunction, timeInMilliSeconds)

// example:
debounce(onMouseScrolling, 1000)
```

A function will be called only once when the event get stopped.
To be in simple, its like setTimeout, only difference is setTimeout will be stopped once it’s done, but this start again if the event start happening but that always make sure it will be triggered only once a time.

**Ex:** While mouse scrolling - If we wanted to get to a function call only one time after the event completes then. Debounce will be the best choice!

---

**Visual Representation:**

- [DEMO](http://demo.nimius.net/debounce_throttle/)

### Can I do animations in React?

- [React Transition Group](https://reactcommunity.org/react-transition-group/)
- [React Motion](https://github.com/chenglou/react-motion)
