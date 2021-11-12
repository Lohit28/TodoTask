import { createStore } from "redux";
import todoReducer from "./redux/todoReducer";
const store = createStore(todoReducer);
export default store;
