import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeAllTodo } from "./redux/TodoAction";
import { Link } from "react-router-dom";

export default function TodoContainer() {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);

  return (
    <div>
      <figure>
        <figcaption>Add here</figcaption>
      </figure>
      <input
        type="text"
        placeholder="Add items"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button onClick={() => dispatch(addTodo(inputData), setInputData(""))}>
        +
      </button>
      <div>
        {list.map((elem) => (
          <div>
            <div key={elem.id}>
              <h3>{elem.data}</h3>
              <button onClick={() => dispatch(deleteTodo(elem.id))}>-</button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => dispatch(removeAllTodo())}>Delete All</button>
      </div>
      <Link to="/add">search</Link>
    </div>
  );
}
