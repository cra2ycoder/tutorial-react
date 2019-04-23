import React from 'react'

function Address(props) {
  const { data } = props
  return (
    <>
      <div>{data.street}</div>
      <div>{data.suite}</div>
      <div>{data.city}</div>
      <div>{data.zipcode}</div>
    </>
  )
}

export { Address }
export default Address
