import React, { useState } from 'react'

function Row(props) {
  const { name, children } = props
  return (
    <fieldset>
      <legend>{name}</legend>
      {children}
    </fieldset>
  )
}

function Greetings() {
  // adding multiple state objects
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

export { Row, Greetings }
export default Greetings
