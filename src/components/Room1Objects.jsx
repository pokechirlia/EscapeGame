import { useState } from "react";

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

  const collectItem = (name, url) => {
    setVisible(false);
    props.addItem(name, url);
  };

  return (
    <div>
      <img
        src="/sprites/door.png"
        style={{ ...doorStyle, visibility: isVisible ? "visible" : "hidden" }}
        onClick={() => collectItem("door", "/sprites/door.png")}
      />
    </div>
  );
}

export default Room1Objects;
