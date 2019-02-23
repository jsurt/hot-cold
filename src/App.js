import React, { Component } from "react";
import Header from "./Header";
import Results from "./Results";
import Form from "./Form";
import Guesses from "./Guesses";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
