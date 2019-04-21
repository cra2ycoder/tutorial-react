import React from 'react'

function Row(props) {
  const { name, children } = props
  return (
    <fieldset>
      <legend>{name}</legend>
      {children}
    </fieldset>
  )
}

export { Row }
export default Row
