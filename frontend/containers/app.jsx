import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import TodoList from '../components/todoList.jsx'
import CreateTodo from '../components/createTodo.jsx'

class App extends Component {
  componentDidMount() {
    this.props.actions.fetchTodos()


  }
  render() {
    const {
      todos,
      actions
    } = this.props

    return (
      <div>
        <CreateTodo create={actions.createTodo}/>
        <TodoList todos={todos}/>
      </div>
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
