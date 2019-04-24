# React Life Cycle

- life cycle methods are some special methods for the `React` classes
- this would happened the when the components `mounts` and `unmounts`

# Life Cycles Methods

## Legacy

- **componentDidMount()**

  - **flow:** `render()` ➡ `componentDidMount()`
  - **arguments:** `NONE`
  - **call-count:** 1

---

- **componentDidUpdate(prevProps, prevState, snapshot)**

  - **flow:** `each state update` ➡ `render()` ➡ `componentDidUpdate()`
  - **arguments**:

    - `prevProps`: previous class properties
    - `prevState`: previous class state object
    - `snapshot`: the value which returned by `getSnapshotBeforeUpdate()`

  - **call-count:** based on the updates

---

- **componentWillUnmount()**

  - **flow:** `before unmount/destroy` ➡ `componentWillUnmount()`
  - **arguments:** `NONE`
  - **call-count:** 1

## Deprecated/UNSAFE

- these are legacy methods only
- but react not recommending to use in the new code

- **UNSAFE_componentWillMount()**

  - **flow:** `before mount/render()` ➡ `UNSAFE_componentWillMount()`
  - **arguments:** `NONE`
  - **call-count:** 1
  - it was `componentWillMount()`
  - better to use class `constructor` instead of this

---

- **UNSAFE_componentWillReceiveProps()**

  - **flow:** `before receive new props` ➡ `UNSAFE_componentWillReceiveProps()`
  - **arguments:** `NONE`
  - **call-count:** based on the new props receiving
  - it was `componentWillReceiveProps()`

---

- **UNSAFE_componentWillUpdate(nextProps, nextState)**

  - **flow:**
    `before receive new props` ➡ `before render()` ➡ `UNSAFE_componentWillUpdate()`
  - **arguments**:

    - `nextProps`: next class properties
    - `nextState`: next class state object

  - **call-count:** based on the new props update

  - it was `componentWillUpdate()`

---

**NOTE**

- unsafe coding practice
- so added `UNSAFE_` prefix
- this has been done in the `16.3` relese itself
- `17.0` release:
  - removed: `componentWillMount()`, `componentWillReceiveProps()` and `componentWillUpdate()`
  - remains: `UNSAFE_componentWillMount()`, `UNSAFE_componentWillReceiveProps()` and `UNSAFE_componentWillUpdate()`

## Rarely Used Life cycle Methods

- **shouldComponentUpdate(nextProps, nextState)**

  - **flow:**

    - `after state update` ➡ `shouldComponentUpdate()` ➡ `if return true` ➡ `render()`
    - `after state update` ➡ `shouldComponentUpdate()` ➡ `if return false`

  - **arguments**:

    - `nextProps`: next class properties
    - `nextState`: next class state object

  - **call-count:** based on the new props/state update
  - must be returned `true/false`
    - `true`: allows component to call `render()`
    - `false`: disallow component to call `render()`

---

- **componentDidCatch(error, info)**

  - **flow:** `error from descendant component` ➡ `componentDidCatch()`

  - **arguments**:

    - `error`: error message
    - `info`: the object which has the details about the component threw the error.

  - **call-count:** when error occurs

---

- `[new]` **getDerivedStateFromProps(props, state)**

  - called before `render` and `re-render`
  - together with `componentDidUpdate`
  - covers all use cases of `componentWillReceiveProps()`
  - returns an object
  - add significant complexity to components
  - often leads to bugs
  - https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

---

- `[new]` **getSnapshotBeforeUpdate(prevProps, prevState)**

  - called before the `DOM` get updated
  - together with `componentDidUpdate`
  - covers all use cases of `componentWillUpdate()`
  - returns a value as a third argument to the `componentDidUpdate`
  - is not often needed

---

- `[new]` **getDerivedStateFromError()**

---

## Reference Link

- https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html
