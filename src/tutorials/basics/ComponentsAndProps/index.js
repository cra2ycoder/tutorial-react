import React from 'react'
import ReactDOM from 'react-dom'

/**
 * @example
 * using a function as a component
 *
 * props -> properties
 */

function User(props) {
  const { name } = props
  return <h2>{name}</h2>
}

const userView = (
  <>
    <User name="John" />
    <User name="Michael" />
  </>
)

/**
 * @example
 * using ES6 class to create react component
 */

class UserComponent extends React.Component {
  render() {
    const { name } = this.props
    return <h2>{name}</h2>
  }
}

const userComponentView = (
  <>
    <UserComponent name="James" />
    <UserComponent name="Amaya" />
  </>
)

/**
 * @example
 * multiple components
 */

// to display profile pic
class ProfileIcon extends React.Component {
  render() {
    const { photoUrl } = this.props
    return (
      <div>
        <img src={photoUrl} />
      </div>
    )
  }
}

// to display user name
class PersonInfo extends React.Component {
  render() {
    const { firstName, lastName } = this.props
    return (
      <div>
        {firstName} {lastName}
      </div>
    )
  }
}

// main component
class Person extends React.Component {
  render() {
    return (
      <>
        <ProfileIcon photoUrl="https://via.placeholder.com/150" />
        <PersonInfo firstName="john" lastName="doe" />
      </>
    )
  }
}

const view = (
  <>
    {userView}
    {userComponentView}
    <Person />
  </>
)

ReactDOM.render(view, document.getElementById('components-and-props'))
