import React from 'react'
import ReactDOM from 'react-dom'
import SimpleIF from './SimpleIF'
import IfElse from './IfElse'
import InlineIFLogical from './InlineIFLogical'
import ConditionalOperator from './ConditionalOperator'

ReactDOM.render(
  <>
    <SimpleIF isLoggedIn={false} />
    <SimpleIF isLoggedIn={true} />
    <hr />
    <IfElse isLoggedIn={false} />
    <IfElse isLoggedIn={true} />
    <hr />
    <InlineIFLogical />
    <InlineIFLogical
      message={'This is working via inline logical && operator '}
    />
    <ConditionalOperator />
    <ConditionalOperator isLoggedIn={true} />
  </>,
  document.getElementById('conditional-render')
)
