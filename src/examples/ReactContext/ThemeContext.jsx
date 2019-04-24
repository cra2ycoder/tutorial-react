import React, { createContext } from 'react'
import './styled.css'

/**
 * @step1
 * declaring the context
 */
const ButtonThemeContext = createContext({})

/**
 * @step3
 * adding the consumer for children
 */
const FlatButton = props => {
  //   console.log(props)
  return (
    <ButtonThemeContext.Consumer>
      {context => {
        // console.log('flat')
        // console.log(context)
        const btnStyle = {
          backgroundColor: context.theme,
        }
        return (
          <>
            <div className="btn flat-button" style={btnStyle}>
              Flat Button
            </div>
            <button
              onClick={() =>
                context.getMessage(
                  `Flat Button! ${context.theme} Theme successfully updated!`
                )
              }
            >
              FLAT BUTTON STATUS
            </button>
          </>
        )
      }}
    </ButtonThemeContext.Consumer>
  )
}

const GhostButton = props => {
  //   console.log(props)
  return (
    <ButtonThemeContext.Consumer>
      {context => {
        // console.log('ghost')
        // console.log(context)
        const btnStyle = {
          color: context.theme,
          borderColor: context.theme,
        }
        return (
          <>
            <div className="btn ghost-button" style={btnStyle}>
              Ghost Button
            </div>
            <button
              onClick={() =>
                context.getMessage(
                  `Ghost Button! ${context.theme} Theme successfully updated!`
                )
              }
            >
              GHOST BUTTON STATUS
            </button>
          </>
        )
      }}
    </ButtonThemeContext.Consumer>
  )
}

/**
 * @step2
 * adding the provider
 */
class ThemeContext extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'blue',
      message: '',
      getMessage: this.printMessage,
    }
  }

  printMessage = msg => {
    console.log(msg)
    this.setState({ ...this.state, message: msg })
  }

  onSelectChange = e => {
    this.setState({
      theme: e.target.value,
    })
  }

  render() {
    return (
      <>
        <h2>Change your theme:</h2>
        <form>
          <select onChange={this.onSelectChange}>
            <option value="violet">dragula</option>
            <option value="red">ironman</option>
            <option value="green">hulk</option>
          </select>
        </form>
        <hr />
        <ButtonThemeContext.Provider value={this.state}>
          <FlatButton />
          <hr />
          <GhostButton />
          <hr />
        </ButtonThemeContext.Provider>
        <p>{`parent: ${this.state.theme} Theme successfully updated!`}</p>
        <p>{'children:' + this.state.message}</p>
      </>
    )
  }
}

export { ThemeContext }
export default ThemeContext
