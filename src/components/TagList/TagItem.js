import React from "react";
import Tag from "./Tag";

const TagItem = (props) => {
  return (
    <div className="row">
      <li key={props.index}>{props.name}</li>
      
    </div>
  );
};

export default TagItem;
