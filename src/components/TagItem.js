import React from "react";
import "./TagBar.css";
import Tag from "./Tag";

const TagItem = (props) => {
  return (
    <div className="row">
      <li key={props.index}>{props.name}</li>
      <input
       type="text"
       placeholder = "Placeholder"
       ></input>
       <button>Add Tag </button>
       <Tag/>
    </div>
  );
};

export default TagItem;
