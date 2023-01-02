import React from "react";

function Modal({ closeModal }) {
  const modalStyle = {
    width: "600px",
    height: "400px",
    backgroundImage: "url('/sprites/modalTest.jpg')",
    backgroundSize: "cover",
  };

  return (
    <div className="modalBackground" style={modalStyle}>
      <div className="modalContainer">
        <div
          className="modalBody"
          style={{ backgroundImage: `url("/sprites/key.png")` }}
        ></div>
        <button onClick={() => closeModal(false)}>X</button>
      </div>
    </div>
  );
}

export default Modal;
