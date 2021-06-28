// import { React, useState, useEffect } from "react";
// import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import DisplayBar from "./components/DisplayBar/DisplayBar";
import Container from "./components/MainContainer/Container";

function App() {
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
