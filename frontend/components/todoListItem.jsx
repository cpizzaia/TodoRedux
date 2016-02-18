import React, { Component } from 'react'

export default class TodoListItem extends Component {

  render() {
    const { todo } = this.props

    return (
      <li className="todo-list-item">
        <h2 className="todo-number">{todo.id}</h2>
        <h2 className="todo-title">{todo.title}</h2>
      </li>
    )
  }
}
