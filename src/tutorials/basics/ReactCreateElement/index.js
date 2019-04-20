import React from 'react'
import ReactDOM from 'react-dom'

/**
 * @example
 * using React.CreateElement
 */
const plainElement = React.createElement(
  'h3',
  {
    className: 'cls-react-cl',
    id: 'react-id',
    onClick: () => {
      console.log('h3 clicked!')
    },
  },
  'message'
)

/**
 * @example
 * using React.CreateElement and adding the children
 */
const withChildren = React.createElement(
  'ul',
  {
    className: 'ul-parent',
  },
  <>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </>
)

ReactDOM.render(
  <>
    {plainElement}
    {withChildren}
  </>,
  document.getElementById('react-create-element')
)
