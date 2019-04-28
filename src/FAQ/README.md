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
