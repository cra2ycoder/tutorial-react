import React, { createContext } from 'react'

const ClassContextObject = createContext({
  theme: 'black',
})

const ClassChildren = () => {
  return (
    <ClassContextObject.Consumer>
      {props => {
        console.log('ClassChildren ----->')
        console.log(props)
        return <div>test</div>
      }}
    </ClassContextObject.Consumer>
  )
}

/**
 * @type1
 */
class ClassContext extends React.Component {
  componentWillMount() {
    console.log('componentWillMount ----->')
    console.log(this.context)
  }
  componentDidMount() {
    console.log('componentDidMount ----->')
    console.log(this.context)
  }
  render() {
    console.log('render ----->')
    console.log(this.context)
    return <ClassChildren />
  }
}

// assigning the context with class
ClassContext.contextType = ClassContextObject

/**
 * @type2
 */
class ClassContextType2 extends React.Component {
  static contextType = ClassContextObject
  render() {
    console.log('ClassContextType2 ---->')
    console.log(this.context)
    return <ClassChildren />
  }
}

export { ClassContext, ClassContextType2 }
export default ClassContext
