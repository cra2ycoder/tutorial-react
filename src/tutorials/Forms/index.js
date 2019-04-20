import React from 'react'
import ReactDOM from 'react-dom'

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      gender: '',
      comments: '',
    }
  }

  onUpdate(e) {}

  submit(e) {}

  render() {
    const { firstName, lastName, gender, comments } = this.state
    return (
      <form>
        <input placeholder={'Enter your First Name'} />
        <input placeholder={'Enter your Last Name'} />
        <select>
          <option>Male</option>
          <option>Female</option>
        </select>
        <textarea placeholder={'Enter your comments'} />
        <button>submit</button>
      </form>
    )
  }
}

ReactDOM.render(<FeedbackForm />, document.getElementById('forms'))
