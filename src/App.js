import { React, useEffect } from "react";
// import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import DisplayBar from "./components/DisplayBar/DisplayBar";
import Container from "./components/MainContainer/Container";
import { useDispatch } from "react-redux";

// eslint-disable-next-line
import {fetchTags} from './components/TagList/TagListSlice';

function App() {
const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchTags())
  }, [dispatch])

  return (
    <div className="App">
      <Container>
        <SearchBar />
        <DisplayBar /> 
      </Container>
    </div>
  );
}

export default App;
