import React from 'react'
import ReactDOM from 'react-dom'

class Disclaimer extends React.Component {
  render() {
    return (
      <>
        <h1>Disclaimer</h1>
        <p>
          Accessibility(a11y) is huge topic to learn! so we need to go through
          the a11y guidelines before we get into start with React. So, I will
          create a new repository for learning only accessibility in future.
          Hence, I am leaving this in half of a way!
        </p>
      </>
    )
  }
}

/**
 * @description
 * accessible for form elements
 */
class AccessibleForm extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="namedInput">Name:</label>
        <input id="namedInput" type="text" name="name" />
      </>
    )
  }
}

ReactDOM.render(
  <>
    <Disclaimer />
    <AccessibleForm />
  </>,
  document.getElementById('a11y')
)
