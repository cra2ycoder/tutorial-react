import React, { createContext } from 'react'

const { Provider, Consumer } = createContext({})

/**
 * @description
 * profile card
 */
class UserProfile extends React.Component {
  render() {
    // const { name, username, email, phone, website } = this.props
    return (
      <Consumer>
        {data => (
          <fieldset>
            <legend>User Profile</legend>
            <div>{data.name}</div>
            <div>{data.username}</div>
            <div>{data.email}</div>
            <div>{data.phone}</div>
            <div>{data.website}</div>
          </fieldset>
        )}
      </Consumer>
    )
  }
}

/**
 * @description
 * address card
 */
class Address extends React.Component {
  render() {
    // const { street, suite, city, zipcode } = this.props
    return (
      <Consumer>
        {data => (
          <fieldset>
            <legend>Address</legend>
            <div>{data.address.street}</div>
            <div>{data.address.suite}</div>
            <div>{data.address.city}</div>
            <div>{data.address.zipcode}</div>
          </fieldset>
        )}
      </Consumer>
    )
  }
}

/**
 * @description
 * main user card
 */
class UserCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        this.setState({ data })
      })
      .catch(err => console.log(err))
  }

  render() {
    const userData = this.state.data[0]
    const data = this.state.data
    return (
      <Provider value={userData}>
        {this.state.data.length > 0 && (
          <>
            <UserProfile />
            <Address />
          </>
        )}
      </Provider>
    )
  }
}

export { UserCard }
export default UserCard
