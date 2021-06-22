import React from "react";
import "./TagBar.css";
import TagItem from "./TagItem";


const TagBar = (props) => {
  const data = props.props;
  if (Object.keys(data).length > 0) {
    console.log(data);
    return (
        <ul>
          {data.map((item, index) => {
            return (
              <TagItem key={index} name={item.name}/>
            );
          })}
        </ul>
    );
  } else {
    return <p></p>;
  }
};

export default TagBar;
