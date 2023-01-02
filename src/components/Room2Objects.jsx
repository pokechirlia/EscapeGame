// import React, { Component } from "react";
// import CollectableObject from "./CollectableObject";
// import CollectItem from "./CollectItem";

// class Room2Objects extends Component {
//   state = {};

//   keyStyle = {
//     width: "150px",
//     position: "relative",
//     top: "280px",
//     left: "250px",
//   };

//   render() {
//     return (
//       <div>
//         <img
//           src="/sprites/key.png"
//           style={this.keyStyle}
//           onClick={CollectItem}
//         />
//         {/* <CollectableObject
//           url="/sprites/key.png"
//           style={this.keyStyle}
//         ></CollectableObject> */}
//       </div>
//     );
//   }
// }

// export default Room2Objects;

import { useState } from "react";
import CollectItem from "./CollectItem";

function Room2Objects(props) {
  const [isVisible, setVisible] = useState(true);

  var keyStyle = {
    width: "150px",
    position: "relative",
    top: "280px",
    left: "250px",
  };

  const openDoor = (event) => {
    console.log("ayo");
    setVisible(false);
    props.addItem("door", "/sprites/door.png");
  };

  const collectItem = (name, url) => {
    setVisible(false);
    props.addItem(name, url);
  };

  return (
    <div>
      <img
        src="/sprites/key.png"
        style={{ ...keyStyle, visibility: isVisible ? "visible" : "hidden" }}
        onClick={() => collectItem("key", "/sprites/key.png")}
      />
    </div>
  );
}

export default Room2Objects;
