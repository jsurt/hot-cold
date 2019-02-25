import React, { Component } from "react";
import Header from "./Header";
import Results from "./Results";
import Form from "./Form";
import Guesses from "./Guesses";
import "./Guesses.css";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: Math.floor(Math.random() * 100 + 1),
      guessCount: 0,
      guesses: [],
      feedback: "Make your guess!",
      disabled: false
    };
  }

  handleSubmit = guess => {
    this.checkGuess(guess);
  };

  checkGuess = guess => {
    const gue = guess;
    const ans = this.state.answer;
    if (isNaN(guess) || (1 > guess || guess > 100)) {
      console.log(typeof guess);
      alert("Please enter a number between 1 and 100");
    } else if (gue == ans) {
      this.setState({
        guessCount: this.state.guessCount + 1,
        guesses: [...this.state.guesses, { guess }],
        feedback: `Correct! Click "+ New Game" to start again`,
        disabled: true
      });
      return console.log("Correct");
    } else if (Math.abs(ans - gue) <= 5) {
      this.setState({
        guessCount: this.state.guessCount + 1,
        guesses: [...this.state.guesses, { guess }],
        feedback: `Hot!`
      });
      return console.log("Hot!");
    } else if (Math.abs(ans - gue) <= 15) {
      this.setState({
        guessCount: this.state.guessCount + 1,
        guesses: [...this.state.guesses, { guess }],
        feedback: `Kinda hot...`
      });
      return console.log("Kinda hot");
    } else if (Math.abs(ans - gue) > 15) {
      this.setState({
        guessCount: this.state.guessCount + 1,
        guesses: [...this.state.guesses, { guess }],
        feedback: `Cold`
      });
      return console.log("Cold!");
    }
  };

  render() {
    let feedback = this.state.feedback;
    const guesses = this.state.guesses.map((guess, index) => (
      <li key={index} className="guess-list-item">
        <Guesses {...guess} />
      </li>
    ));
    return (
      <div>
        <Header />
        <Results feedback={feedback} />
        <Form
          onSubmit={this.handleSubmit}
          guessCount={this.state.guessCount}
          disabled={this.state.disabled}
        />
        <div className="guess-tracker-div">
          <ul className="guess-tracker-list">{guesses}</ul>
        </div>
      </div>
    );
  }
}
