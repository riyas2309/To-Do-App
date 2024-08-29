import React, { useRef } from "react";
import AddTask from "./AddTask";

const Modal = ({ onClose }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 flex justify-center items-center"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
        className="p-6 rounded-lg"
      >
        <AddTask />
      </div>
    </div>
  );
};

export default Modal;
