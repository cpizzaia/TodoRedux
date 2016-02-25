import {
  RECEIVE_TODOS,
  RECEIVE_TODO,
  REMOVE_TODO,
  UPDATE_TODO
   } from '../constants/actionTypes'

export default function todos(state = {}, action) {
  switch(action.type) {
    case RECEIVE_TODOS:
      return [...action.todos]
    case RECEIVE_TODO:
      return [action.todo, ...state]
    case REMOVE_TODO:
      return removeTodo([...state], action.todo)
    case UPDATE_TODO:
      return updateTodo([...state], action.todo)
    default:
      return state;
  }
}

const removeTodo = (todos, todo) => {
  todos.forEach( (todoItem, index) => {
    if (todoItem.id === todo.id) {
      todos.splice(index, 1)
    }
  })
  return todos
}

const updateTodo = (todos, todo) => {
  return todos.map( (todoItem, index) => {
    return todoItem.id === todo.id ? todo : todoItem
  })
}
