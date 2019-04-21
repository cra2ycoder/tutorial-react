import React, { useState, useEffect } from 'react'

function WindowResize() {
  const [width, setWidth] = useState(window.innerWidth)

  function lifeCycleFn() {
    const updateWidth = e => setWidth(window.innerWidth)
    window.addEventListener('resize', updateWidth)

    // clean function added for removing the event
    return () => {
      console.log('clean function called!')
      window.removeEventListener('resize', updateWidth)
    }
  }

  // adding lifecycle function with useEffect()
  useEffect(lifeCycleFn)

  return (
    <>
      <p>Tracking window.innerWidth</p>
      <h1>current width:{width}</h1>
    </>
  )
}

export { WindowResize }
export default WindowResize
