import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'

export default class App extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div> hello </div>
    )
  }
}

const mapStateToProps = function(state) {
  return Object.assign({}, state)
}

const mapDispatchToProps = function(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
