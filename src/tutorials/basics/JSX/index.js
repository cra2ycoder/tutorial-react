import React from 'react'
import ReactDOM from 'react-dom'

/**
 * @example
 * with expressions
 */

const userName = 'John'
const basicExpression = <h2>Hello, {userName}</h2>

/**
 * @example
 * with expressions + function call
 */

function getUserName(user) {
  return user.firstName + ' ' + user.lastName
}

const userData = {
  firstName: 'John',
  lastName: 'Doe',
}

const usernameElement = <h3>User Name: {getUserName(userData)}</h3>

/**
 * @example
 * specifying attributes
 *
 * @note
 * React attributes basically camelCase
 * class -> className
 * tabindex -> tabIndex
 */

const attributeElement = (
  <div className="cls-name" tabIndex="0">
    Attribute Element
  </div>
)

ReactDOM.render(
  <>
    {basicExpression}
    {usernameElement}
    {attributeElement}
  </>,
  document.getElementById('jsx')
)
