import React, { Component } from "react";

class Room1Objects extends Component {
  state = {};

  doorStyle = {
    width: "150px",
    position: "relative",
    top: "90px",
    left: "250px",
  };

  render() {
    return (
      <div>
        <img
          src="/sprites/door.png"
          style={this.doorStyle}
          onClick={this.openDoor}
        />
      </div>
    );
  }

  openDoor() {
    console.log("ayo");
  }
}

export default Room1Objects;
