import React, { useState, Fragment } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    let text = e.target.value;
    setName(text);
  };
  return (
    <Fragment>
      <input
        type="search"
        placeholder="Search Tags"
        onChange={handleInputChange}
        value={name}
        results="0"
        className="search"
      ></input>
    </Fragment>
  );
};

export default SearchBar;
