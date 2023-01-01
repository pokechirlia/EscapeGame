import React, { Component } from "react";
import Room from "./Room";
// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";
import CollectItem from "./CollectItem";

class Page extends Component {
  state = {
    collectedItem: [
      { name: "key", url: "/sprites/key.png" },
      // { name: "door", url: "/sprites/door.png" },
    ],
  };

  storeStyle = {
    height: "75px",
  };

  addItem = (name, url) => {
    // const newState = this.state.collectedItem;
    // .push({ name, url });
    this.setState(() => {
      return {
        collectedItem: [...this.state.collectedItem, { name: name, url: url }],
      };
    });
    console.log(this.state.collectedItem);
  };

  render() {
    return (
      <div id="game_container">
        <Room addItem={this.addItem} />
        {/* <Slide
          autoplay={false}
          transitionDuration={200}
          canSwipe={false}
          slidesToScroll={5}
          slidesToShow={5}
          indicators={true}
        >
          {this.state.collectedItem.map((item) => (
            <div className="each-slide">
              <img src={item} style={this.storeStyle} />
            </div>
          ))}
        </Slide> */}

        <div id="item-container">
          {this.state.collectedItem.map((item) => (
            <img src={item.url} style={this.storeStyle} key={item.name} />
          ))}
        </div>
        {/* 
        <button onClick={this.addItem("door", "/sprites/door.png")}></button> */}
      </div>
    );
  }
}

export default Page;
