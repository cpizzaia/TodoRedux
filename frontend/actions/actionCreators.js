import {
  RECEIVE_TODOS,
  RECEIVE_TODO
} from '../constants/actionTypes';

const TODOS_URL = "api/todos";

const receiveTodos = (todos) => {
  return { type: RECEIVE_TODOS, todos  }
}

const receiveTodo = (todo) => {
  return { type: RECEIVE_TODO, todo }
}

export const fetchTodos = () => {
  return dispatch => {
    return $.ajax({ url: TODOS_URL })
      .then(data => {
        dispatch(receiveTodos(data));
      });
  };
}

export const createTodo = (todo) => {
  return dispatch => {
    return $.ajax({
      url: TODOS_URL,
      method: "POST",
      data: { todo }
    })
    .then(todo => {
      dispatch(receiveTodo(todo))
    })
  }

}
