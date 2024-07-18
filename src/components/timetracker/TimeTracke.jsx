import React from "react";
import { IoMdFingerPrint } from "react-icons/io";
import { IoReloadCircleOutline } from "react-icons/io5";
import { RiFullscreenLine } from "react-icons/ri";
import { BsQuestionCircleFill } from "react-icons/bs";
import TimeTrackerTable from "./TimeTrackerTable";

const TimeTracke = () => {
  return (
    <>
      <div className="flex justify-between p-2">
        <div className="mb-0 p-2 border-b border-red-600">
          <button className="flex items-center py-2 px-10 bg-pink-500 text-white rounded-tl-lg  rounded-tr-lg hover:bg-pink-300 hover:text-black">
            <IoMdFingerPrint className="mr-5" />
            Attendence
          </button>
        </div>
        <div className="flex items-center space-x-4 text-xl">
        <button className="hover:text-pink-500 transition duration-300 transform translate-x-0 group-hover:translate-x-2"><IoReloadCircleOutline /></button>
        <button className="hover:text-pink-500 transition duration-300 transform translate-x-0 group-hover:translate-x-2"><RiFullscreenLine /></button>
        <button className="hover:text-pink-500 transition duration-300 transform translate-x-0 group-hover:translate-x-2"><BsQuestionCircleFill /></button>
    
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {/* Column 1 */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
          <div className="bg-white shadow-md rounded p-4 text-center py-10">
            <h2 className="text-lg font-bold">Total Working Time</h2>
            <p className="text-gray-700">Show Time</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
          <div className="bg-white shadow-md rounded p-4 text-center py-10">
            <h2 className="text-lg font-bold">Time Spent</h2>
            <p className="text-gray-700">Show Time</p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2 ">
          <div className="bg-white shadow-md rounded p-4 text-center py-10">
            <h2 className="text-lg font-bold ">Idle Time</h2>
            <p className="text-gray-700">Show Time</p>
          </div>
        </div>

        {/* Column 4 */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
          <div className="bg-white shadow-md rounded p-4 text-center py-10">
            <h2 className="text-lg font-bold">Away Time</h2>
            <p className="text-gray-700">Show Time</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {/* Column 1 */}
        <div className="w-full p-2">
          <div className="bg-white shadow-md rounded p-2">
            <button className="text-gray-600 font-bold px-10 relative overflow-hidden group py-2">
              Summary
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
            </button>
            <button className="text-gray-600 font-bold px-10 relative overflow-hidden group py-2">
              DESKTOP-RE1MA17
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
            </button>
            <button className="text-gray-600 font-bold px-10 relative overflow-hidden group py-2">
              IOCNICSERVER
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
            </button>
          </div>
        </div>
      </div>
    
      <div className="flex space-x-2 p-2">
  <div className="flex-1 bg-green-500 shadow-md rounded p-2 py-4 hover:bg-green-600 transition-colors duration-300">
    {/* Content */}
  </div>
  <div className="flex-1 bg-pink-500 shadow-md rounded p-2 py-4 hover:bg-pink-600 transition-colors duration-300">
    {/* Content */}
  </div>
  <div className="flex-1 bg-orange-500 shadow-md rounded p-2 py-4 hover:bg-orange-600 transition-colors duration-300">
    {/* Content */}
  </div>
  <div className="flex-1 bg-blue-500 shadow-md rounded p-2 py-4 hover:bg-blue-600 transition-colors duration-300">
    {/* Content */}
  </div>
  <div className="flex-1 bg-red-500 shadow-md rounded p-2 py-4 hover:bg-pink-600 transition-colors duration-300">
    {/* Content */}
  </div>
  <div className="flex-1 bg-yellow-500 shadow-md rounded p-2 py-4 hover:bg-yellow-600 transition-colors duration-300">
    {/* Content */}
  </div>
</div>
      <TimeTrackerTable />
    </>
  );
};

export default TimeTracke;
