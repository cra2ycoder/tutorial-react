import React from 'react'
import ReactDOM from 'react-dom'

class ReactLifeCycle extends React.Component {
  //   componentWillMount() {
  //     console.log('componentWillMount')
  //   }

  UNSAFE_componentWillMount() {
    console.log('UNSAFE_componentWillMount()')
  }

  componentDidMount() {
    console.log('componentDidMount()')
  }

  //   componentWillReceiveProps() {
  //     console.log('componentWillReceiveProps')
  //   }

  UNSAFE_componentWillReceiveProps() {
    console.log('UNSAFE_componentWillReceiveProps()')
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate()')
  }

  //   componentWillUpdate() {
  //     console.log('componentWillUpdate')
  //   }

  UNSAFE_componentWillUpdate() {
    console.log('UNSAFE_componentWillUpdate()')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate()')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()')
  }

  componentDidCatch() {
    console.log('componentDidCatch()')
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate()')
  }

  render() {
    console.log('render()')
    return ''
  }
}

ReactDOM.render(<ReactLifeCycle />, document.getElementById('react-life-cycle'))
