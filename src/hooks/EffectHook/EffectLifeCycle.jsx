import React, { useState, useEffect } from 'react'

function LifeCycleComponent() {
  useEffect(() => {
    console.log('componentDidMount...!')
    return () => console.log('componentWillUnmount...!')
  })
  return <h3>{`<LifeCycleComponent />`}</h3>
}

function EffectLifeCycle() {
  const [buttonState, setButtonState] = useState(true)
  function handleButtonState(e) {
    setButtonState(!buttonState)
  }
  return (
    <>
      {buttonState && <LifeCycleComponent />}
      <p>Please check console.logs when clicking on the button!</p>
      <button onClick={handleButtonState}>
        {buttonState ? 'HIDE' : 'SHOW'}
      </button>
    </>
  )
}

export { EffectLifeCycle }
export default EffectLifeCycle
