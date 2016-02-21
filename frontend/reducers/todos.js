import {
  RECEIVE_TODOS,
  RECEIVE_TODO
   } from '../constants/actionTypes'

export default function todos(state = {}, action) {
  switch(action.type) {
    case RECEIVE_TODOS:
      return [...action.todos]
    case RECEIVE_TODO:
      return [action.todo, ...state]
    default:
      return state;
  }
}
