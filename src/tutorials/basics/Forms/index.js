import React from 'react'
import ReactDOM from 'react-dom'

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      gender: 'Male',
      comments: '',
    }

    // this.submit = this.submit.bind(this)
  }

  onChange = e => {
    // console.log(this)
    // console.log(e.target.name)
    // console.log(e.target.value)
    // console.log('on update triggered')

    const name = e.target.name
    this.setState({
      [name]: e.target.value,
    })
    // console.log(this.state)
  }

  submit = e => {
    e.preventDefault()
    // console.log(this)
    console.log(this.state)
    console.log('submit triggered!')
  }

  render() {
    const { firstName, lastName, gender, comments } = this.state
    return (
      <form onSubmit={this.submit}>
        <input
          name="firstName"
          placeholder={'Enter your First Name'}
          onChange={this.onChange}
        />
        <input
          name="lastName"
          placeholder={'Enter your Last Name'}
          onChange={this.onChange}
        />
        <select name="gender" onChange={this.onChange} value={gender}>
          <option>Male</option>
          <option>Female</option>
        </select>
        <textarea
          name="comments"
          placeholder={'Enter your comments'}
          onChange={this.onChange}
        />
        <button>submit</button>
      </form>
    )
  }
}

ReactDOM.render(<FeedbackForm />, document.getElementById('forms'))
