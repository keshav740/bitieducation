import React from "react";

const NewModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-pink-100 bg-opacity-50 flex items-center justify-center">
      <div className="bg-pink-300 p-4 rounded-lg shadow-lg w-5/6">
        <div className="flex justify-between items-center border-b-2 border-red-500 pb-5">
          <h2 className="text-xl font-semibold">Modal Form</h2>
          <button
            onClick={onClose}
            className="text-4xl hover:text-green-500 transition duration-300 font-semibold"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewModal;
