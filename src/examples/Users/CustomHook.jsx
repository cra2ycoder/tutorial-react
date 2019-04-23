import React, { useState, useEffect } from 'react'

function useUserList() {
  const [userList, setUserList] = useState([])
  const [userId, setUserId] = useState(0)
  const [isFilter, setIsFilter] = useState(false)

  useEffect(() => {
    console.log('trigger')
    async function fetchData() {
      await fetch(
        'https://jsonplaceholder.typicode.com/users/' + (isFilter ? userId : '')
      )
        .then(res => res.json())
        .then(data => {
          // console.log(data)
          setUserList(isFilter ? [data] : data)
          // console.log(userList)
        })
        .catch(err => console.log(err))
    }
    fetchData()
  }, [userId])

  return {
    userList,
    setUserList,
    userId,
    setUserId,
    isFilter,
    setIsFilter,
  }
}

export { useUserList }
export default useUserList
