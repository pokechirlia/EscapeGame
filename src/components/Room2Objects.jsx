import React, { Component } from "react";

class Room2Objects extends Component {
  state = {};

  keyStyle = {
    width: "150px",
    position: "relative",
    top: "300px",
    left: "250px",
  };

  render() {
    return (
      <div>
        <img src="/sprites/key.png" style={this.keyStyle} />
      </div>
    );
  }
}

export default Room2Objects;
