import React, {Fragment} from "react";
import "./DisplayBar.css";
import TagItem from "../TagList/TagItem";

const DisplayBar = (props) => {
  const data = props.props;
  if (Object.keys(data).length > 0) {
    // console.log(data);
    return (
      <ul>
        {data.map((item, index) => {
          return (
            <Fragment>
              <TagItem key={index} name={item.name} />
              <input type="text" placeholder="Placeholder"></input>
              <button>Add Tag </button>
              {/* <Tag/> */}
            </Fragment>
          );
        })}
      </ul>
    );
  } else {
    return <p></p>;
  }
};

export default DisplayBar;
