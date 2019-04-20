import React from 'react'
import ReactDOM from 'react-dom'

function showTime() {
  const dateObj = new Date()
  const hours = dateObj.getHours()
  const mins = dateObj.getMinutes()
  const secs = dateObj.getSeconds()
  const timeStr = `${hours}:${mins}:${secs}`

  ReactDOM.render(
    <div>{timeStr}</div>,
    document.getElementById('rendering-element')
  )
}

setInterval(showTime, 1000)
