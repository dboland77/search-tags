import React from "react";
import "./DisplayBar.css";
import TagList from "../TagList/TagList"

const DisplayBar = (props) => {
  const data = props.props;
  if (Object.keys(data).length > 0) {
    // console.log(data);
    return (
      <ul>
        {data.map((item, index) => {
          return (
            <ul className = "row">
              <li key={index}>{item.name}</li>  
              <TagList/>
              <input type="text" placeholder="Placeholder"></input>
              <button>Add Tag </button>
            </ul>
          );
        })}
      </ul>
    );
  } else {
    return <p></p>;
  }
};

export default DisplayBar;
