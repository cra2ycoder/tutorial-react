import React, { useState } from 'react'

function Counter() {
  // adding the useState for count
  const [count, setCount] = useState(0)

  function handleClick(e) {
    // updating the state on the button click
    setCount(count + 1)
  }

  return (
    <>
      <p>count: {count}</p>
      <button onClick={handleClick}>Click Me!</button>
    </>
  )
}

export { Counter }
export default Counter
