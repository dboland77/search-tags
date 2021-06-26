import { React, useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import TagBar from "./components/DisplayBar/DisplayBar";
import Container from "./components/MainContainer/Container";

const URL = "https://my.api.mockaroo.com/movies.json?key=bf3c1c60";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const source = axios.CancelToken.source();

    const loadTags = async () => {
      try {
        const response = await axios.get(URL);
        setData(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
        } else {
          throw error;
        }
      }
    };

    loadTags();

    return () => {
      source.cancel();
    };
  }, []);

  return (
    <div className="App">
      <Container>
        <SearchBar />
        <TagBar props={data} />
      </Container>
    </div>
  );
}

export default App;
