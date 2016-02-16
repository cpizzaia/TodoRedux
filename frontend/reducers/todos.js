import { RECEIVE_TODO } from '../constants/actionTypes';

export default function todos(state = {}, action) {
  switch(action.type) {
    case RECEIVE_TODO:
      return Object.assign({}, state, action.todo);

    default:
      return state;
  }
}
