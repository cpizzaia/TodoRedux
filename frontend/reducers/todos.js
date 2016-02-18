import { RECEIVE_TODOS } from '../constants/actionTypes';

export default function todos(state = {}, action) {
  switch(action.type) {
    case RECEIVE_TODOS:
      return [...action.todos]
    default:
      return state;
  }
}
