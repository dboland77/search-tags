import React, { useState, Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  tagFiltered,
  tagFilterStart,
  tagFilterDone,
} from "../TagList/TagListSlice";

import "./SearchBar.css";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const text = e.target.value;
    if (text === "") {
      dispatch(tagFilterDone());
    } else
    {
      dispatch(tagFilterStart())
    }
    setSearchText(text);
  };

  useEffect(() => {

    const searchPattern = new RegExp(`^${searchText}`, "gi");
    dispatch(tagFiltered(searchPattern));
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
