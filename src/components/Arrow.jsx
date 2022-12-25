import React, { Component } from "react";

class Arrow extends Component {
  state = {};
  render() {
    return <img src="/sprites/left_arrow.png" onClick={this.handleClick}></img>;
  }

  handleClick() {
    console.log("?");
  }
}

export default Arrow;
