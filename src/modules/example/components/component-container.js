import React from 'react'
import {connect} from 'react-redux'
import {fetchTodos} from '../actions'

import Component from './component'

class ComponentContainer extends React.Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    return (<Component {...this.props}/>)
  }
}

const mapStateToProps = ({todos}, ownProps) => ({
  todos, anotherProp: ownProps.test
})

const mapDispatchToProps = ({
  fetchTodos
})

export default connect(mapStateToProps, mapDispatchToProps)(ComponentContainer)
