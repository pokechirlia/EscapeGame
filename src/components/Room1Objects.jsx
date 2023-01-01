// import React, { Component } from "react";
// import CollectableObject from "./CollectableObject";

import { useState } from "react";

// class Room1Objects extends Component {
//   state = {};

//   doorStyle = {
//     width: "150px",
//     position: "relative",
//     top: "90px",
//     left: "250px",
//   };

//   render() {
//     return (
//       <div>
//         <img
//           src="/sprites/door.png"
//           style={this.doorStyle}
//           onClick={this.openDoor}
//         />
//       </div>
//     );
//   }

//   openDoor = (event) => {
//     console.log("ayo");
//     this.style.visibility = "hidden";
//     this.props.addItem("door", "/sprites/door.png");
//   };
// }

// export default Room1Objects;

function Room1Objects(props) {
  const [isVisible, setVisible] = useState(true);

  var collectedStyle = {
    visibility: "hidden",
  };

  var doorStyle = {
    width: "150px",
    position: "relative",
    top: "90px",
    left: "250px",
  };

  const openDoor = (event) => {
    console.log("ayo");
    setVisible(false);
    // this.style.visibility = "hidden";
    props.addItem("door", "/sprites/door.png");
  };

  return (
    <div>
      <img
        src="/sprites/door.png"
        style={{ ...doorStyle, visibility: isVisible ? "visible" : "hidden" }}
        onClick={openDoor}
      />
    </div>
  );
}

export default Room1Objects;
