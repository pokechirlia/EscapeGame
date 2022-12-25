import React, { Component } from "react";
import Room from "./Room";

class Page extends Component {
  state = {};
  render() {
    return (
      <div id="game_container">
        <Room roomNumber={1} />
      </div>
    );
  }
}

export default Page;
