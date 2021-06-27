import React from "react";
import TagList from "../TagList/TagList";
import { useSelector } from "react-redux";
import { selectMovies, selectTags, selectLoadingStatus } from "../TagList/TagListSlice";

import "./DisplayBar.css";

const DisplayBar = () => {

  const loadingStatus = useSelector(selectLoadingStatus)
  const movieList = useSelector(selectMovies);
  
  if(loadingStatus === 'loading'){
    return (
      <h1>LOADING PLEASE WAIT</h1>
      )
    }

  if (Object.keys(movieList).length > 0) {
    return (
      <ul>
        {movieList.map((item, index) => {
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
    return <h1>Sorry no movies returned</h1>;
  }
};

export default DisplayBar;
