import React, { useState, Fragment } from "react";

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
      ></input>
      <p>{name}</p>
    </Fragment>
  );
};

export default SearchBar;
