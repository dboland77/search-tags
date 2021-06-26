import React from "react";
import {useSelector, useDispatch} from 'react-redux'

import "./TagList.css";

const TagList = () => {
  const dispatch = useDispatch()

  const listData = useSelector(state => state);

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  if (!listData) {
    console.log(listData)
    return null;
  }

  console.log("hello", listData)

  return (
    <ul className="tags">
      {listData.list.map((item) => (
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
