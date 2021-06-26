import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {tagRemoved} from './TagListSlice';

import "./TagList.css";

const TagList = ({movieId}) => {
  const dispatch = useDispatch()
  const {tags} = useSelector(state=>state.tags);

  const handleRemove = (tagId, movieId) => {
    dispatch(tagRemoved(tagId, movieId));
  };

  if (!tags) {
    return null;
  }

  return (
    <ul className="tags">
      {tags.map((tag) => (
        <li key = {tag.tagId} className="tag">
          {tag.text}
          <span 
          key = {tag.tagId} 
          className="tagRemove" 
          onClick={() => handleRemove(tag.tagId, movieId)}
          aria-label="Remove tag">
          &times;
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TagList;
