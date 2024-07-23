import React from "react";
import { IoMdClose } from "react-icons/io";

const OpenModal = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalCloseBtn">
          <button onClick={() => closeModal(false)}>
            <IoMdClose />
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want To Continue?</h1>
        </div>
        <div className="body">
          <p>
            The text page is awesome! You should move forward? you will enjoy
            it.
          </p>
        </div>
        <div className="footer">
          <button onClick={() => closeModal(false)}>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default OpenModal;
