import React, { useState } from 'react'
import Row from './../../components/Row'

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

export { Greetings }
export default Greetings
