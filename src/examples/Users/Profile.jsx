import React from 'react'

function Profile(props) {
  const { data } = props
  return (
    <>
      <div>{data.name}</div>
      <div>{data.username}</div>
      <div>{data.email}</div>
      <div>{data.phone}</div>
      <div>{data.website}</div>
    </>
  )
}

export { Profile }
export default Profile
