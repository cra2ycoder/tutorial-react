import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Row from '../../components/Row'
import WindowResize from '../EffectHook/WindowResize'

/**
 * @description
 * custom hook method
 * @param {*} initialValue
 *
 * used to handle the multiple user inputs
 */
function useFromInput(initialValue) {
  // state
  const [value, setValue] = useState(initialValue)

  // handle change
  function handleChange(e) {
    setValue(e.target.value)
  }

  return {
    value,
    onClick: handleChange,
  }
}

function UserForm() {
  const firstName = useFromInput('john')
  const lastName = useFromInput('doe')
  return (
    <>
      <form>
        <input
          name="firstName"
          placeholder="Enter your first name"
          onChange={firstName.onClick}
        />
        <input
          name="lastName"
          placeholder="Enter your last name"
          onChange={lastName.onClick}
        />
      </form>
      <Row name="User Data">
        <h3>{firstName.value}</h3>
        <h3>{lastName.value}</h3>
      </Row>
      <WindowResize />
    </>
  )
}

ReactDOM.render(<UserForm />, document.getElementById('custom-hook'))
