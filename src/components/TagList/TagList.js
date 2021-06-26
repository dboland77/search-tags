import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {tagRemoved} from './TagListSlice';

import "./TagList.css";

const TagList = () => {
  const dispatch = useDispatch()
  const {tags} = useSelector(state=>state.tags);

  const handleRemove = (id) => {
    dispatch(tagRemoved(id));
  };

  if (!tags) {
    return null;
  }

  return (
    <ul className="tags">
      {tags.map((item) => (
        <li key = {item.id} className="tag">
          {item.text}
          <span 
          key = {item.id} 
          className="tagRemove" 
          onClick={() => handleRemove(item.id)}
          aria-label="Remove tag">
          &times;
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TagList;
