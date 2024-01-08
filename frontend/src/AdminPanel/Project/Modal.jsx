// Modal.js
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children, imageURL }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-black opacity-50 fixed inset-0"></div>
      <div className="bg-white rounded-lg overflow-hidden z-10 p-8 max-w-3xl w-full max-h-screen overflow-y-auto relative">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        {imageURL && (
          <div className="mb-4">
            <img
              src={imageURL}
              alt="Project"
              className="max-w-full h-auto rounded-md"
            />
          </div>
        )}
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
