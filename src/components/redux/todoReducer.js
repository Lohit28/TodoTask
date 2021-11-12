import { ADD_TODO, DELETE_TODO, REMOVEALL_TODO } from "./TodoTypes";
const initialState = {
  list: []
};
const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data
          }
        ]
      };
    case DELETE_TODO:
      const newList = state.list.filter((elem) => elem.id !== action.payload);
      return {
        ...state,
        list: newList
      };
    case REMOVEALL_TODO:
      return {
        ...state,
        list: []
      };

    default:
      return state;
  }
};
export default TodoReducer;
