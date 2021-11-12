import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";

export default function TodoSearch1() {
  const [filterData, setFilterData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const list = useSelector((state) => state.list);

  var listItems = [];
  if (filterData.length !== 0) {
    listItems = filterData.map((item) => {
      return <div key={item.id}>{item.data}</div>;
    });
  }
  const searchHandler = (e) => {
    const word = e.target.value;
    setWordEntered(word);
    const newFilter = list.filter((elem) => {
      return elem.data.toLowerCase().includes(word.toLowerCase());
    });
    if (word === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };
  const clearInput = () => {
    setFilterData([]);
    setWordEntered("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={wordEntered}
        onChange={searchHandler}
      />

      {filterData.length !== 0 && <CloseIcon onClick={clearInput} />}

      <div>{listItems}</div>

      <div>
        <Link to="/">back </Link>
      </div>
      <div></div>
    </div>
  );
}
