import React from "react";
import { CiAlarmOn } from "react-icons/ci";

const Productivity = () => {
  return (
    <div>
      <div className="flex items-center mt-2 space-x-1">
        <div className="flex flex-col items-center justify-center bg-pink-100 hover:bg-pink-200 px-10 py-5 rounded-lg transition duration-300">
          <div className="flex items-center space-x-2">
            <h4 className="font-semibold text-xl">Working Time </h4>
            <CiAlarmOn className=" text-sky-500"/>
          </div>
          <p className="text-2xl text-sky-500 pt-2 font-semibold">11 : 20</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-pink-100 hover:bg-pink-200 px-10 py-5 rounded-lg transition duration-300">
          <div className="flex items-center space-x-2">
            <h4 className="font-semibold text-xl">Productive Time </h4>
            <CiAlarmOn className=" text-green-500"/>
          </div>
          <p className="text-2xl text-green-500 pt-2 font-semibold">02 : 34</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-pink-100 hover:bg-pink-200 px-10 py-5 rounded-lg transition duration-300">
          <div className="flex items-center space-x-2">
            <h4 className="font-semibold text-xl">Non-Productive Time </h4>
            <CiAlarmOn className=" text-red-500"/>
          </div>
          <p className="text-2xl text-red-500 pt-2 font-semibold">13 : 35</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-pink-100 hover:bg-pink-200 px-10 py-5 rounded-lg transition duration-300">
          <div className="flex items-center space-x-2">
            <h4 className="font-semibold text-xl">Neutral Time </h4>
            <CiAlarmOn className=" text-purple-500"/>
          </div>
          <p className="text-2xl text-purple-500 pt-2 font-semibold">2</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-pink-100 hover:bg-pink-200 px-10 py-5 rounded-lg transition duration-300">
          <div className="flex items-center space-x-2">
            <h4 className="font-semibold text-xl">Away Time </h4>
            <CiAlarmOn className="text-gray-500"/>
          </div>
          <p className="text-2xl text-gray-500 pt-2 font-semibold">1</p>
        </div>
      </div>
    </div>
  );
};

export default Productivity;
