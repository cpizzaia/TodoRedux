import React, { Component } from 'react'

export default class TodoListItem extends Component {

  delete() {
    this.props.deleteTodo(this.props.todo)
  }

  done() {
    return this.props.todo.done ? <div className="todo-done">X</div> : <div className="todo-done" onClick={this.completeTodo.bind(this)}></div>
  }

  completeTodo() {
    const { id, title } = this.props.todo
    this.props.updateTodo({id, title, done: true})
  }

  render() {
    const { todo } = this.props

    return (
      <li className="todo-list-item">
        <h2 className="todo-delete" onClick={this.delete.bind(this)}>X</h2>
        {this.done()}
        <h2 className="todo-title">{todo.title}</h2>
      </li>
    )
  }
}
