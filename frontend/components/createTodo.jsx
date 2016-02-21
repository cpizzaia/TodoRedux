import React, { Component } from 'react'
import linkState from 'react-link-state'


export default class CreateTodo extends Component {
  constructor(props) {
    super(props)
    this.state = { title: "" }
  }

  createTodo(e) {
    e.preventDefault()
    this.props.create({title: this.state.title})
    this.setState({title: "" })
  }

  render() {
    return (
      <form className="create-todo">
        <input type="text" name="todo" className="create-todo-input" valueLink={linkState(this, 'title')}/>
        <input type="submit" className="create-todo-submit" onClick={this.createTodo.bind(this)}/>
      </form>
    )
  }
}
