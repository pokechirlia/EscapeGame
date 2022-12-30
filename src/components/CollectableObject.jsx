import React, { Component } from "react";

class CollectableObject extends Component {
  state = {
    collected: false,
  };

  storeStyle = {
    width: "75px",
    position: "relative",
    top: "10px",
    left: "10px",
  };

  storeItem = () => {
    this.setState({
      collected: true,
    });
    console.log("??");
  };

  render() {
    return (
      <img
        src={this.props.url}
        style={this.state.collected ? this.storeStyle : this.props.style}
        onClick={this.storeItem}
      ></img>
    );
  }
}

export default CollectableObject;
