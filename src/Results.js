import React, { Component } from "react";
import "./Results.css";

export default function Results(props) {
  return <div className="results">{props.feedback}</div>;
}
