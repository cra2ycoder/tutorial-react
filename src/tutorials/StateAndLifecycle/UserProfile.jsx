import React from 'react'
import ReactDOM from 'react-dom'

/**
 * @example
 * multiple state props
 */
class UserProfile extends React.Component {
  constructor(props) {
    super(props)

    // state declaring
    this.state = {
      info: {
        firstName: 'John',
        lastName: 'Doe',
      },
      picture: {
        photoUrl: 'https://via.placeholder.com/150',
      },
    }
  }

  updatePicture() {
    this.setState((state, props) => {
      return {
        picture: {
          photoUrl: 'https://via.placeholder.com/75',
        },
      }
    })
  }

  updateProfileData() {
    this.setState((state, props) => {
      return {
        info: {
          firstName: 'test',
        },
      }
    })
  }

  componentDidMount() {
    setTimeout(() => this.updateProfileData(), 2000)
    setTimeout(() => this.updatePicture(), 3000)
  }

  render() {
    console.log(this.state)

    const { info, picture } = this.state
    const { firstName, lastName } = info
    const { photoUrl } = picture
    return (
      <>
        <div>
          <img src={photoUrl} />
        </div>
        <div>
          {firstName} {lastName}
        </div>
      </>
    )
  }
}

export { UserProfile }
export default UserProfile
