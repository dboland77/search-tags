import React, { useState } from "react";
import TagList from "../TagList/TagList";
import { useSelector, useDispatch } from "react-redux";
import {
  selectMovies,
  selectLoadingStatus,
  selectTotalTagCount,
  selectTagCountbyMovie,
  tagAdded
} from "../TagList/TagListSlice";

import "./DisplayBar.css";

const DisplayBar = () => {
  //local state to track the placeholder text
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const loadingStatus = useSelector(selectLoadingStatus);
  const movieList = useSelector(selectMovies);
  //const totalTagCount = useSelector(selectTotalTagCount);

  if (loadingStatus === "loading") {
    return <h1>LOADING PLEASE WAIT</h1>;
  }

  const handleAddTag = (e, tagId, movieId) => {
    const tagCount = 4;

    if (tagCount >= 5) {
      alert("Max tags of 5 please remove one");
      return
    }

    if (text === "") {
      alert("Please enter a non-blank tag text");
      return
    }

    dispatch(tagAdded(tagId, movieId, text));

   setText("")
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  if (Object.keys(movieList).length > 0) {
    return (
      <ul>
        {movieList.map((item, index) => {
          return (
            <ul key={index} className="row">
              <li key={index}>{item.name}</li>
              <TagList movieId={item.id} />
              <input
                type="text"
                placeholder="Placeholder"
                onChange={handleInputChange}
              ></input>
              <button type = "submit" onClick={(e) => handleAddTag(e, 1, item.id)}>
                Add Tag{" "}
              </button>
            </ul>
          );
        })}
      </ul>
    );
  } else {
    return <h1>Sorry no movies returned</h1>;
  }
};

export default DisplayBar;
