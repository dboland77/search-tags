import React from "react";
import "./DisplayBar.css";
import TagList from "../TagList/TagList"

const DisplayBar = (props) => {
  const data = props.props;
  if (Object.keys(data).length > 0) {
    return (
      <ul>
        {data.map((item, index) => {
          return (
            <ul key = {index} className = "row">
              <li key={index}>{item.name}</li>  
              <TagList movieId={item.id}/>
              <input type="text" placeholder="Placeholder"></input>
              <button>Add Tag </button>
            </ul>
          );
        })}
      </ul>
    );
  } else {
    return <TagList/>;
  }
};

export default DisplayBar;
