import React, { useState, Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { tagFiltered } from "../TagList/TagListSlice";

import "./SearchBar.css";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  useEffect(() => {
    if (searchText !== "") {
      const searchPattern = new RegExp(`^${searchText}`, "gi");
      dispatch(tagFiltered(searchPattern));
    }
  }, [searchText, dispatch]);

  return (
    <Fragment>
      <input
        type="search"
        placeholder="Search Tags"
        onChange={handleInputChange}
        value={searchText}
        results="0"
        className="search"
      ></input>
    </Fragment>
  );
};

export default SearchBar;
