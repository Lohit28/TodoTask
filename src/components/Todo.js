import React from "react";
import TodoContainer from "./TodoContainer";
import TodoSearch1 from "./TodoSearch1";

import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Todo() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<TodoContainer />} />
          <Route path="/add" element={<TodoSearch1 />} />
        </Routes>
      </Router>
    </Provider>
  );
}
export default Todo;
