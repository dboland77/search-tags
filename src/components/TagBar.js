import React from "react";
import "./TagBar.css";

const TagBar = (props) => {
  const data = props.props;
  if (Object.keys(data).length > 0) {
    console.log(data);
    return (
      <div className="container">
        <ul>
          {data.map((item, index) => {
            return (
              <li key={index} className="row">
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <p></p>;
  }
};

export default TagBar;
