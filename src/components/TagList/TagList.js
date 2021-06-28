import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {
  tagRemoved, 
  selectTagListbyId,
  selectFilteredTagListbyId} from './TagListSlice';
import "./TagList.css";


const TagList = ({movieId}) => {
  const dispatch = useDispatch()

  //let tagList = useSelector(selectTagListbyId(movieId));
  const tagList = useSelector(selectFilteredTagListbyId(movieId))
  
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
