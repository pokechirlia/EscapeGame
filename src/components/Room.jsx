import React, { Component } from "react";
import Arrow from "./Arrow";

class Room extends Component {
  state = {};

  allRoomStyle = {
    backgroundSize: "contain",
    width: "600px",
    height: "400px",
    position: "absolute",
  };

  arrowStyle = {
    position: "absolute",
    top: "50%",
    width: "60px",
  };

  render() {
    const roomNumber = this.props.roomNumber;
    if (roomNumber == 1) return this.renderRoom1();

    if (roomNumber == 2) return this.renderRoom2();
  }

  renderRoom1() {
    const word = {
      color: "red",
      // scale: 2,
      position: "relative",
      top: 20,
      left: 30,
    };

    const door = {
      width: "160px",
      position: "relative",
      top: 70,
      left: 250,
    };

    return (
      <div
        style={{
          ...this.allRoomStyle,
          backgroundImage: "url(/sprites/background_test.png)",
        }}
      >
        <Arrow direction="left" currentRoom={this.props.roomNumber} />
        <img src="/sprites/door.png" style={door}></img>
      </div>
    );
  }

  renderRoom2() {
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
        <img src="/sprites/left_arrow.png" style={this.arrowStyle}></img>
        <h1 style={word}>lmao</h1>
      </div>
    );
  }
}

export default Room;
