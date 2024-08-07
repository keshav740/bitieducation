import React from "react";
import { ImProfile } from "react-icons/im";
import { GrFormClose } from "react-icons/gr";

const ProfileModal = ({ isVisible, onClose }) => {
  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-pink-200 bg-opacity-50 z-40"></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-1/3 bg-pink-200 shadow-lg transform transition-transform z-50 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-red-500 bg-pink-300">
          <h2 className="text-xl font-semibold">Modal Title</h2>
          <button onClick={onClose}>
            <GrFormClose className="text-3xl hover:text-green-500" />
          </button>
        </div>
        <div className="p-4">
          <p>Modal Content Goes Here</p>
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
