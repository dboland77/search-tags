import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {tagRemoved, selectTagListbyId} from './TagListSlice';
import "./TagList.css";


const TagList = ({movieId}) => {
  const dispatch = useDispatch()

  const tagList = useSelector(selectTagListbyId(movieId));
  
  const handleRemove = (tagId, movieId) => {
    dispatch(tagRemoved(tagId, movieId));
  };

  if (!tagList) {
    return null;
  }

  return (
    <ul className="tags">
      {tagList.map((tag) => (
        <li key = {tag.tagId} className="tag">
          {tag.text}
          <span 
          key = {tag.tagId} 
          className="tagRemove" 
          onClick={() => handleRemove(tag.tagId, movieId)}
          aria-label="Remove tag">
          &nbsp; &times;
          </span>
        </li>
      ))}
    </ul>
    
  );
};

export default TagList;
