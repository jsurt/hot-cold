import React, { Component } from "react";
import "./Guesses.css";

export default class Guesses extends Component {
  render() {
    return (
      <div className="guess-tracker-div">
        <ul className="guess-tracker-list" />
      </div>
    );
  }
}
