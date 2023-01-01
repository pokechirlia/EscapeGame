import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
// import Arrow from "./Arrow";
import Room1Objects from "./Room1Objects";
import Room2Objects from "./Room2Objects";

class Room extends Component {
  state = {
    // roomNumber: this.props.roomNumber,
  };

  // allRoomStyle = {
  //   backgroundSize: "contain",
  //   width: "600px",
  //   height: "400px",
  //   position: "absolute",
  // };

  // arrowStyle = {
  //   position: "absolute",
  //   top: "50%",
  //   width: "60px",
  // };

  render() {
    const rooms = [
      "/sprites/room1.png",
      "/sprites/room2.png",
      "/sprites/room3.png",
      "/sprites/room4.png",
    ];
    return (
      <div className="slide-container">
        <Slide autoplay={false} transitionDuration={200} canSwipe={false}>
          <div className="each-slide room-slide">
            <div style={{ backgroundImage: `url(${rooms[0]})` }}>
              <Room1Objects addItem={this.props.addItem} />
            </div>
          </div>

          <div className="each-slide room-slide">
            <div style={{ backgroundImage: `url(${rooms[1]})` }}>
              <Room2Objects />
            </div>
          </div>

          <div className="each-slide room-slide">
            <div style={{ backgroundImage: `url(${rooms[2]})` }}></div>
          </div>

          <div className="each-slide room-slide">
            <div style={{ backgroundImage: `url(${rooms[3]})` }}>bbb</div>
          </div>
        </Slide>
      </div>
    );
    // const roomNumber = this.props.roomNumber;
    // if (roomNumber == 1) return this.renderRoom1();
    // if (roomNumber == 2) return this.renderRoom2();
  }

  // renderRoom1() {
  //   const word = {
  //     color: "red",
  //     // scale: 2,
  //     position: "relative",
  //     top: 20,
  //     left: 30,
  //   };

  //   const door = {
  //     width: "160px",
  //     position: "absolute",
  //     top: 70,
  //     left: 250,
  //   };

  //   return (
  //     <div
  //       style={{
  //         ...this.allRoomStyle,
  //         backgroundImage: "url(/sprites/background_test.png)",
  //       }}
  //     >
  //       <Arrow direction="left" currentRoom={this.props.roomNumber} />
  //       <img src="/sprites/door.png" style={door}></img>
  //     </div>
  //   );
  // }

  // renderRoom2() {
  //   const word = {
  //     color: "red",
  //     // scale: 2,
  //     position: "relative",
  //     top: 20,
  //     left: 30,
  //   };

  //   return (
  //     <div
  //       style={{
  //         ...this.allRoomStyle,
  //         backgroundImage: "url(/sprites/background_test.png)",
  //       }}
  //     >
  //       <img src="/sprites/left_arrow.png" style={this.arrowStyle}></img>
  //       <h1 style={word}>lmao</h1>
  //     </div>
  //   );
  // }
}

export default Room;
