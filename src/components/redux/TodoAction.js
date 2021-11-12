import { ADD_TODO, DELETE_TODO, REMOVEALL_TODO } from "./TodoTypes";
export const addTodo = (items) => {
  return {
    type: ADD_TODO,
    payload: {
      id: Math.random(),
      data: items
    }
  };
};
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};
export const removeAllTodo = () => {
  return {
    type: REMOVEALL_TODO
  };
};
