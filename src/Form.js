import React, { Component } from "react";
import "./Form.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  onSubmit = event => {
    event.preventDefault();
    const text = this.textInput.value.trim();
    this.props.onSubmit(text);
    this.textInput.value = "";
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Enter your guess"
          ref={input => (this.textInput = input)}
          disabled={this.props.disabled}
        />
        <button disabled={this.props.disabled}>Guess</button>
        <p>
          Guess# <span className="guess-counter">{this.props.guessCount}</span>!
        </p>
      </form>
    );
  }
}
