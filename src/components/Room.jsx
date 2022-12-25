import React, { Component } from "react";
//import room1 from "./a.png";

class Room extends Component {
  state = {};

  allRoomStyle = {
    backgroundSize: "contain",
    width: "600px",
    height: "400px",
    position: "absolute",
  };

  render() {
    return this.renderRoom1();
  }

  renderRoom1() {
    const word = {
      color: "red",
      // scale: 2,
      position: "relative",
      top: 20,
      left: 30,
    };

    return (
      <div
        style={{
          ...this.allRoomStyle,
          backgroundImage: "url(/sprites/background_test.png)",
        }}
      >
        <h1 style={word}>HEYYY</h1>
      </div>
    );
  }
}

export default Room;
