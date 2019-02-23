import React, { Component } from "react";
import Header from "./Header";
import Results from "./Results";
import Form from "./Form";
import Guesses from "./Guesses";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <Results />
        <Form />
        <Guesses />
      </div>
    );
  }
}

export default App;
