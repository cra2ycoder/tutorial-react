import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import Profile from './Profile'
import Address from './Address'
import Company from './Company'
import useUserList from './CustomHook'

function UserList(props) {
  const { userList, userId, setUserId, isFilter, setIsFilter } = useUserList()
  const inputRef = useRef()

  function onClickFilterButton(e) {
    e.preventDefault()
    const value = inputRef.current.value
    setIsFilter(value !== '')
    setUserId(value)
  }

  return (
    <>
      <form>
        <input ref={inputRef} placeholder="enter {id} to filter" />
        <button onClick={onClickFilterButton}>Filter</button>
      </form>
      <div className="user-lists">
        {userList.length > 0 &&
          userList.map((user, idx) => (
            <div key={'key-' + idx}>
              <h1>{user.id}</h1>
              <Profile data={user} />
              <Address data={user.address} />
              <Company data={user.company} />
              <hr />
            </div>
          ))}
      </div>
    </>
  )
}

ReactDOM.render(<UserList />, document.getElementById('users'))
