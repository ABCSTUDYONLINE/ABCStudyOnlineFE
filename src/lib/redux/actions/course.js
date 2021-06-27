import * as TYPES from "../types";

export const getTodos = () => (dispatch, getStore) => {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => {
      dispatch({ type: TYPES.GET_TODOS, payload: json.slice(0, 20) });
    });
};

export const getCurrentTodo = (id) => (dispatch, getStore) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => response.json())
    .then((json) => {
      dispatch({ type: TYPES.GET_CURRENT_TODO, payload: json });
    });
};
