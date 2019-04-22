# Context

- provides a way to **pass data** through the **component tree**

## When to use Context

- we have to use, when you are require to pass a global property to any level of children component from main component

- on the below example, you can see the `avatarSize` property is keep sharing with all the components. To avoid that we need to maintain its in global.

```jsx
<Page user={user} avatarSize={avatarSize} />
// ... which renders ...
<PageLayout user={user} avatarSize={avatarSize} />
// ... which renders ...
<NavigationBar user={user} avatarSize={avatarSize} />
// ... which renders ...
<Link href={user.permalink}>
  <Avatar user={user} size={avatarSize} />
</Link>
```

## Free JSON API Placeholder

https://jsonplaceholder.typicode.com/
https://jsonplaceholder.typicode.com/users
