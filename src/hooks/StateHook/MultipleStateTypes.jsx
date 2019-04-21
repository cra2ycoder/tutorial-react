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
  const [fruitName, setFruitName] = useState('')
  const [fruitList, setFruitList] = useState([
    'apple',
    'orange',
    'pineapple',
    'mango',
  ])

  function onFruitNameTyping(e) {
    setFruitName(e.target.value)
  }

  function addFruit() {
    /**
     * @note
     * note, here we have to add previous list items
     * so require to use spread/rest operator to the same
     * else the type will be get changed and error will be thrown
     * useState always merge the data, no concat / maintaining the previous value
     */
    setFruitList([...fruitList, fruitName])
  }

  const hasFruits = Array.isArray(fruitList) && fruitList.length > 0

  return (
    <Row name="Array">
      <h2>Array State</h2>
      <ul>
        {hasFruits &&
          fruitList.map((item, id) => {
            return <li key={'id' + id}>{item}</li>
          })}
      </ul>
      <input placeholder="Enter new fruit name!" onChange={onFruitNameTyping} />
      <button onClick={addFruit}>ADD</button>
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
  })

  const renderUIForObject = () => {
    let items = []
    for (let p in user) {
      items.push(
        <li key={p}>
          {p} : {user[p]}
        </li>
      )
    }
    return items
  }

  function onTypingNewName(e) {
    setUserData({ ...user, name: e.target.value })
  }

  function onTypingNewAge(e) {
    setUserData({ ...user, age: e.target.value })
  }

  function onTypingNewDegree(e) {
    setUserData({ ...user, degree: e.target.value })
  }

  return (
    <Row name="Object">
      <h2>Object State</h2>
      <ul>{renderUIForObject()}</ul>
      <input placeholder="Enter new name!" onChange={onTypingNewName} />
      <input
        placeholder="Enter new age!"
        type="number"
        onChange={onTypingNewAge}
      />
      <input placeholder="Enter new degree!" onChange={onTypingNewDegree} />
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
