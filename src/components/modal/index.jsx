import React, { useState } from "react";
import OpenModal from "./OpenModal";

const Modal = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="modal">
      <h1>Hey, click on the button to open the modal.</h1>
      <button className="openBtn" onClick={() => setOpenModal(true)}>
        Open
      </button>
      {openModal && <OpenModal closeModal={setOpenModal}/>}
    </div>
  );
};

export default Modal;
