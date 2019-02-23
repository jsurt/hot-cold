import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <a className="info" href="">
            WHAT?
          </a>
          <a className="restart" href="">
            + New Game
          </a>
        </nav>
        <h1>HOT or COLD</h1>
      </header>
    );
  }
}
