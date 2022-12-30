import React, { Component } from "react";
import CollectableObject from "./CollectableObject";
import CollectItem from "./CollectItem";

class Room2Objects extends Component {
  state = {};

  keyStyle = {
    width: "150px",
    position: "relative",
    top: "280px",
    left: "250px",
  };

  render() {
    return (
      <div>
        <img
          src="/sprites/key.png"
          style={this.keyStyle}
          onClick={CollectItem}
        />
        {/* <CollectableObject
          url="/sprites/key.png"
          style={this.keyStyle}
        ></CollectableObject> */}
      </div>
    );
  }
}

export default Room2Objects;
