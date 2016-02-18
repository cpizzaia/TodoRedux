import React, { Component } from 'react'


export default class CreateTodo extends Component {
  render() {
    return (
      <div className="create-todo">
        <input type="text" className="create-todo-input"></input>
        <button className="create-todo-submit">Create</button>
      </div>
    )
  }
}
