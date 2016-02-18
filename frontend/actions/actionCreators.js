import {
  RECEIVE_TODOS
} from '../constants/actionTypes';

const TODOS_URL = "api/todos";

function receiveTodos(todos) {
  return { type: RECEIVE_TODOS, todos };
}

export function fetchTodos() {
  return dispatch => {
    return $.ajax({ url: TODOS_URL })
      .then(data => {
        dispatch(receiveTodos(data));
      });
  };
}
