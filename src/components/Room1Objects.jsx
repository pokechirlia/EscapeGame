import { useState } from "react";
import Modal from "./Modal";

function Room1Objects(props) {
  const [isVisible, setVisible] = useState(true);
  const [isDoorOpen, setDoorOpen] = useState(false);

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

  const disableNativeDragOverEvent = (e) => e.preventDefault();

  const openDoor = (event) => {
    const draggedObject = event.dataTransfer.getData("name");

    if (draggedObject == "key") {
      // alert("holycrab");
      setDoorOpen(true);
    }
  };

  const renderRoom = () => {
    return (
      <img
        src="/sprites/door.png"
        style={{ ...doorStyle, visibility: isVisible ? "visible" : "hidden" }}
        // onClick={() => collectItem("door", "/sprites/door.png")}
        onDragOver={disableNativeDragOverEvent}
        onDrop={openDoor}
      />
    );
  };

  return (
    <div>
      {isDoorOpen ? (
        <Modal closeModal={setDoorOpen} />
      ) : (
        <img
          src="/sprites/door.png"
          style={{ ...doorStyle, visibility: isVisible ? "visible" : "hidden" }}
          // onClick={() => collectItem("door", "/sprites/door.png")}
          onDragOver={disableNativeDragOverEvent}
          onDrop={openDoor}
        />
      )}
    </div>
  );
}

export default Room1Objects;
