# Hooks

- New addition from `16.8` react release
- helps us to use `state` and other react `features` **without using `class`**

- **Completely opt-in**

  - you can try using with existing components that you have

- **100% backwards-compatible**

  - NO BREAKING Changes in Hooks

- **No plans to remove class components**

  - Hooks is just additional features for React, so existing features will not be deprecated

- **Hooks provides direct API**

  - you may already familier with: props, state, context, ref and lifecycle.
  - Hooks just provide you alternate powerful way to work on the same features.

- **Update your all packages when updating react**
  - while updating `react` update the `reactDOM` when you trying to get the updates for hooks

## Why Hooks?

- **Hooks allow you to reuse stateful logic without changing your component hierarchy**
- **Helps to split one component into multiple small functions and handles lifecycle easily**
- **Hooks let you use more of React's features without classes**

- **render:**
  - as the hooks are functional components means just like functions, so no render()will be required

## Core pieces

- **State Hook:** (state management)

  - this.state + this.setState => useState()

- **Effect Hook** (life cycle)

  - componentDidMount + componentDidUpdate + componentWillUnmount => useEffect()
  - componentDidCatch + getDerivedStateFromError => there are no hooks methods yet but will be added soon.

- **Custom Hooks** (build our own hooks)
- **Other Hooks** (using context with hooks)

## ESLint support for HOOK

- add the following package in your `devDependencies`

```json
devDependencies: {
    "eslint-plugin-react-hooks": "1.6.0"
}
```

- and run the following command to install

```
yarn install
```

- add configuration in `.eslintrc.json`

```json
{
  "plugins": ["react-hooks"],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

## FAQ

https://reactjs.org/docs/hooks-faq.html#which-versions-of-react-include-hooks
