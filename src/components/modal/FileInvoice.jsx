import React from "react";
import { FiRefreshCcw } from "react-icons/fi";
import { FaCalendar } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";

const FileInvoice = ({ isOpen, onClose, showTooltip }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-pink-100 bg-opacity-50 flex items-center justify-center">
      <div className="bg-pink-300 p-4 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-2/4 h-160 overflow-y-auto">
        <div className="flex justify-end items-center border-b-2 border-red-500 pb-5">
          <button
            onClick={onClose}
            className="text-4xl hover:text-green-500 transition duration-300 font-semibold"
          >
            &times;
          </button>
        </div>
        <div className="w-full bg-pink-200 mt-10 border-4 border-pink-400 px-10 py-5 rounded-lg">
          <div className="flex justify-end items-center space-x-6">
            <input
              type="text"
              className="border-none outline-none bg-pink-300 px-10 py-2 rounded-lg placeholder-blue-500"
              placeholder="Search...."
            />
            <FiRefreshCcw className="text-3xl text-sky-400 cursor-pointer hover:text-pink-400 transition duration-300" />
            <FaCalendar className="text-3xl text-sky-400 cursor-pointer hover:text-pink-400 transition duration-300" />
            <RiUserSettingsFill className="text-3xl text-sky-400 cursor-pointer hover:text-pink-400 transition duration-300" />
          </div>
        </div>
        <div className="flex flex-col items-center py-10">
          <p className="text-xl hover:text-pink-100 transition duration-300">
            No Work Is Here
          </p>
        </div>
      </div>
    </div>
  );
};

export default FileInvoice;
