import React from 'react'
import './style.css'

function Sort(props) {
  return (
    <div arrow="keyboard_arrow_down" className="sort-wrapper">
      <select className="custom-dropdown">
        <option>option 1</option>
        <option>option 2</option>
        <option>option 3</option>
        <option>option 4</option>
      </select>
    </div>
  )
}

export { Sort }
export default Sort
