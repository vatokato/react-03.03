import React, { Component } from "react";


export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    }
  }

  render() {
    return (
      <p>{ this.state.counter }</p>
    )
  }
}