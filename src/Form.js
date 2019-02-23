import React, { Component } from "react";
import "./Form.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: Math.floor(Math.random() * 100 + 1),
      guessCount: 0,
      guesses: []
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    let guess = this.textInput.value;
    this.setState({
      guessCount: this.state.guessCount + 1
    });
    this.checkGuess(guess);
    this.textInput.value = "";
  };

  checkGuess = guess => {
    if (isNaN(guess) || (1 > guess || guess > 100)) {
      console.log(typeof guess);
      alert("Please enter a number between 1 and 100");
    } else {
      console.log("Correct!");
    }
  };

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter your guess"
          ref={input => (this.textInput = input)}
        />
        <button onClick={e => console.log(e.currentTarget)}>Guess</button>
        <p>
          Guess# <span>{this.state.guessCount}</span>!
        </p>
      </form>
    );
  }
}
