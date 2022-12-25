import React, { Component } from "react";
import Room from "./Room";

const game_width = 600;
const game_height = 500;

class Page extends Component {
  state = {};
  render() {
    return (
      <div id="game_container">
        <Room />
      </div>
    );
  }
}

export default Page;
