import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function TodoSearchs() {
  const list = useSelector((state) => state.list);
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={searchTerm}
        onChange={searchHandler}
      />

      {list
        .filter((elem) => elem.data.includes(searchTerm.toLowerCase()))
        .map((elem) => (
          <div>
            <div key={elem.id}>
              <h3>{elem.data}</h3>
            </div>
          </div>
        ))}
      <Link to="/"> back </Link>
    </div>
  );
}
