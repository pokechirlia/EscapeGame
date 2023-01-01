import React, { Component } from "react";
import CollectableObject from "./CollectableObject";

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

  openDoor = (event) => {
    console.log("ayo");
    this.props.addItem("door", "/sprites/door.png");
  };
}

export default Room1Objects;
