import React from "react";

const Attendance = () => {
  return (
    <div>
      <div className="flex items-center mt-2 justify-between">
        <div className="flex flex-col items-center justify-center bg-pink-100 hover:bg-pink-200 px-10 py-5 rounded-lg transition duration-300 w-40">
          <h4 className="font-semibold text-xl">Team Count</h4>
          <p className="text-2xl text-sky-500 pt-2 font-semibold">2</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-pink-100 hover:bg-pink-200 px-10 py-5 rounded-lg transition duration-300 w-40">
          <h4 className="font-semibold text-xl">On Leave</h4>
          <p className="text-2xl text-sky-500 pt-2 font-semibold">0</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-pink-100 hover:bg-pink-200 px-10 py-5 rounded-lg transition duration-300 w-40">
          <h4 className="font-semibold text-xl">Present</h4>
          <p className="text-2xl text-sky-500 pt-2 font-semibold">1</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-pink-100 hover:bg-pink-200 px-10 py-5 rounded-lg transition duration-300 w-40">
          <h4 className="font-semibold text-xl">Absent</h4>
          <p className="text-2xl text-sky-500 pt-2 font-semibold">1</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-pink-100 hover:bg-pink-200 px-10 py-5 rounded-lg transition duration-300 ">
          <h4 className="font-semibold text-xl">Attention Needed</h4>
          <p className="text-2xl text-sky-500 pt-2 font-semibold">1</p>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
