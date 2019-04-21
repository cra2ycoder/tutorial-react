import React, { useState } from 'react'
import { Row } from './Greetings'

/**
 * @example
 * handling only one string data in state
 */
function StringState() {
  const [name, setName] = useState('john')

  function handleChange(e) {
    setName(e.target.value)
  }

  return (
    <Row name="String">
      <h2>String State</h2>
      <p>Your Name: {name}</p>
      <input onChange={handleChange} />
    </Row>
  )
}

/**
 * @example
 * handling only one number data in state
 */
function NumberState() {
  const [rollno, setRollno] = useState(0)

  function handleChange(e) {
    setRollno(e.target.value)
  }
  return (
    <Row name="Number">
      <h2>Number State</h2>
      <p>Your Roll No: {rollno}</p>
      <input type="number" onChange={handleChange} />
    </Row>
  )
}

/**
 * @example
 * handling list of data in state
 */
function ArrayState() {
  const [fruitList, setFruitList] = useState([
    'apple',
    'orange',
    'pineapple',
    'mango',
  ])
  return (
    <Row name="Array">
      <h2>Array State</h2>
    </Row>
  )
}

/**
 * @example
 * handling multiple properties data in state
 */
function ObjectState() {
  const [user, setUserData] = useState({
    name: 'John',
    age: 30,
    degree: 'mca',
    weight: 70,
    height: 5.6,
  })
  return (
    <Row name="Object">
      <h2>Object State</h2>
    </Row>
  )
}

function MultipleStateTypes() {
  return (
    <>
      <StringState />
      <NumberState />
      <ArrayState />
      <ObjectState />
    </>
  )
}

export { MultipleStateTypes }
export default MultipleStateTypes
