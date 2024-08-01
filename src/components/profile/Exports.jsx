import React from "react";

const Exports = () => {
  return (
    <>
      <div className="flex p-2 h-full">
        <div className="w-full p-0 bg-pink-200">
          <p className="p-10 text-3xl font-bold">Exports</p>
          <div className="p-28 ">
            <div className="p-20 bg-pink-300 rounded-2xl shadow-2xl shadow-pink-500/50 text-center">
              <p className="font-semibold text-2xl">No Exports</p>
              <p className="py-48 text-2xl">Total exports: 0</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exports;
