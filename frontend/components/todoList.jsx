import React, { Component } from 'react'
import TodoListItem from './todoListItem.jsx'

export default class TodoList extends Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map(todo => {
          return <TodoListItem key={todo.id} todo={todo} />
        })}
      </ul>
    )
  }
}
