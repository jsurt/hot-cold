import React, { Component } from "react";
import "./Form.css";

export default function Form(props) {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <input type="text" placeholder="Enter your guess" />
      <button onClick={() => console.log("Hello world")}>Guess</button>
      <p>
        Guess# <span>{0}</span>!
      </p>
    </form>
  );
}
