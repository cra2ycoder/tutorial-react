import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function Row(props) {
  const { name, children } = props
  return (
    <fieldset>
      <legend>{name}</legend>
      {children}
    </fieldset>
  )
}

function Greeting(props) {
  const [name, setName] = useState('Mary')
  const [surname, setSurname] = useState('Poppins')

  function handleNameUpdate(e) {
    setName(e.target.value)
  }

  function handleSurnameUpdate(e) {
    setSurname(e.target.value)
  }

  return (
    <div>
      <Row name="Name">
        <input name="name" value={name} onChange={handleNameUpdate} />
      </Row>
      <Row name="Surname">
        <input name="surname" value={surname} onChange={handleSurnameUpdate} />
      </Row>
    </div>
  )
}

ReactDOM.render(<Greeting />, document.getElementById('use-state'))
