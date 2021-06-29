import React from "react";
import TagList from "../TagList/TagList";
import { useSelector } from "react-redux";
import { selectMovies, selectLoadingStatus } from "../TagList/TagListSlice";
import { monthNames, monthSuffix } from "../utilities/Utilities";
import "./DisplayBar.css";

const DisplayBar = () => {
  const loadingStatus = useSelector(selectLoadingStatus);
  const movieList = useSelector(selectMovies);

  if (loadingStatus === "loading") {
    return <h1>LOADING PLEASE WAIT</h1>;
  }


  const formatDateString = (str)=> {
    let [year,month,day] = str.split('-')
    day = day.slice(0,2)
    str = `Released: ${day}${monthSuffix[day]} ${monthNames[month]} ${year}`
    return str
  }
  if (Object.keys(movieList).length > 0) {
    return (
      <ul>
        {movieList.map((item, index) => {
          return (
            <ul key={index}>
              <div className="row">
                <div className="movieDetails">
                  <li key={index+1000}>{item.name}</li>
                  <li key={index+10000} className="datefield">
                    {formatDateString(item.created_at)}
                  </li>
                </div>
                <TagList movieId={item.id} />
              </div>
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
