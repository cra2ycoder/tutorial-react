import React from 'react'

function Company(props) {
  const { data } = props
  return (
    <>
      <div>{data.name}</div>
      <div>{data.catchPhrase}</div>
      <div>{data.bs}</div>
    </>
  )
}

export { Company }
export default Company
