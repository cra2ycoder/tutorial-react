# React Life Cycle

- life cycle methods are some special methods for the `React` classes
- this would happened the when the components `mounts` and `unmounts`

# Life Cycles Methods

## Legacy

- **componentDidMount()**

  - **flow:** `render()` ➡ `componentDidMount()`
  - **arguments:** `NONE`
  - **call-count:** 1

* **componentDidUpdate(prevProps, prevState, snapshot)**

  - **flow:** `each state update` ➡ `render()` ➡ `componentDidUpdate()`
  - **arguments**:

    - `prevProps`: previous class properties
    - `prevState`: previous class state object
    - `snapshot`: the value which returned by `getSnapshotBeforeUpdate()`

  - **call-count:** based on the updates

* **componentWillUnmount()**

  - called

* **shouldComponentUpdate()**

  - called

* **componentDidCatch()**

  - called

## Deprecated/UNSAFE

- **UNSAFE_componentWillMount()**

  - it was `componentWillMount()`

- **UNSAFE_componentWillReceiveProps()**

  - it was `componentWillReceiveProps()`

- **UNSAFE_componentWillUpdate()**

  - it was `componentWillUpdate()`

**NOTE**

- unsafe coding practice
- so added `UNSAFE_` prefix
- this has been done in the `16.3` relese itself
- `17.0` release:
  - removed: `componentWillMount()`, `componentWillReceiveProps()` and `componentWillUpdate()`
  - remains: `UNSAFE_componentWillMount()`, `UNSAFE_componentWillReceiveProps()` and `UNSAFE_componentWillUpdate()`

## NEW

- **getDerivedStateFromProps()**

  - called before `render` and `re-render`
  - together with `componentDidUpdate`
  - covers all use cases of `componentWillReceiveProps()`
  - returns an object
  - add significant complexity to components
  - often leads to bugs
  - https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

- **getSnapshotBeforeUpdate()**

  - called before the `DOM` get updated
  - together with `componentDidUpdate`
  - covers all use cases of `componentWillUpdate()`
  - returns a value as a third argument to the `componentDidUpdate`
  - is not often needed

---

## Reference Link

- https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html
