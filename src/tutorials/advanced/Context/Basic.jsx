import React, { createContext } from 'react'

const ThemeContext = createContext({})

const ChildrenA = () => {
  return (
    <ThemeContext.Consumer>
      {props => {
        const { theme } = props
        return <div className={theme}>{theme}</div>
      }}
    </ThemeContext.Consumer>
  )
}

const ChildrenB = () => {
  return (
    <ThemeContext.Consumer>
      {props => {
        const { theme } = props
        return <div className={theme}>{theme}</div>
      }}
    </ThemeContext.Consumer>
  )
}

class Basic extends React.Component {
  render() {
    const themeProps = { theme: 'black' }
    return (
      <ThemeContext.Provider value={themeProps}>
        <ChildrenA />
        <ChildrenB />
      </ThemeContext.Provider>
    )
  }
}

export { Basic }
export default Basic
