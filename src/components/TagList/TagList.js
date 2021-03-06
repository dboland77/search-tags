import React, { useState, Fragment} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  tagRemoved,
  selectTagListbyId,
  selectFilterStatus,
  selectFilteredTagListbyId,
  selectTotalTagCount,
  selectTagCountbyMovie,
  tagAdded,
} from "./TagListSlice";

import "./TagList.css";
import "../DisplayBar/DisplayBar.css";

const TagList = ({ movieId }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const totalTagCount = useSelector(selectTotalTagCount);
  const tagCountforMovie = useSelector(selectTagCountbyMovie(movieId));
  const filtered = useSelector(selectFilterStatus);

  let tagList = useSelector(selectTagListbyId(movieId));
  const filteredTagList = useSelector(selectFilteredTagListbyId(movieId));

  const handleRemove = (tagId, movieId) => {
    dispatch(tagRemoved(tagId, movieId));
  };

  const handleAddTag = (e, tagId, movieId) => {
    if (tagCountforMovie >= 5) {
      alert("Max tags of 5 please remove one before adding another");
      setText("")
      return;
    }

    if (text === "") {
      alert("Please enter a non-blank tag text");
      return;
    }

    dispatch(tagAdded(tagId, movieId, text));

    setText("");
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  if (!tagList) {
    return null;
  }

  return (
    <Fragment>
    <div className = "row">
    {filtered &&
      <ul className="tags">
        {filteredTagList.map((tag) => (
          <li key={tag.tagId} className="tag">
            {tag.text}
            <span
              key={tag.tagId}
              className="tagRemove"
              onClick={() => handleRemove(tag.tagId, movieId)}
              aria-label="Remove tag"
            >
              &nbsp; &times;
            </span>
          </li>
        ))}
      </ul>}
      {!filtered &&
      <ul className="tags">
        {tagList.map((tag) => (
          <li key={tag.tagId} className="tag">
            {tag.text}
            <span
              key={tag.tagId}
              className="tagRemove"
              onClick={() => handleRemove(tag.tagId, movieId)}
              aria-label="Remove tag"
            >
              &nbsp; &times;
            </span>
          </li>
        ))}
      </ul>}
    </div>
      <input
        type="text"
        placeholder="Placeholder"
        onChange={handleInputChange}
        value={text}
      ></input>
      <button
        onClick={(e) => handleAddTag(e, totalTagCount + 1, movieId)}
      >
        Add Tag{" "}
      </button>
    </Fragment>
  );
};

export default TagList;
