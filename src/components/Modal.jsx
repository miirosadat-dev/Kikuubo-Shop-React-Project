import React from "react";

const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm p-4"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full text-2xl text-gray-400 transition-all duration-200 hover:bg-gray-100 hover:text-black"
          onClick={() => setIsModalOpen(false)}
        >
          &times;
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
