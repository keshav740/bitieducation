import React from "react";
import { TbDeviceImacDollar } from "react-icons/tb";

const OtherInfo = () => {
  return (
    <div>
      <div className="flex items-center justify-between space-x-2 pt-2">
        <div className="border border-red-500 rounded-lg px-5 py-5 bg-pink-200">
          <h2 className="font-bold text-2xl">Most Productive Users</h2>
          <div className="flex justify-center items-center flex-col px-5 py-10">
            <TbDeviceImacDollar className="text-9xl text-pink-400" />
            <p className="pt-5 font-semibold text-2xl text-gray-800">
              Productive users not yet tracked
            </p>
          </div>
        </div>
        <div className="border border-red-500 rounded-lg px-5 py-5 bg-pink-200">
          <h2 className="font-bold text-2xl">Most Non-Productive Users</h2>
          <div className="flex justify-center items-center flex-col px-5 py-10">
            <TbDeviceImacDollar className="text-9xl text-pink-400" />
            <p className="pt-5 font-semibold text-2xl text-gray-800">
            Non-Productive users not yet tracked
            </p>
          </div>
        </div>
        <div className="border border-red-500 rounded-lg px-5 py-5 bg-pink-200">
          <h2 className="font-bold text-2xl">Idle Time Users</h2>
          <div className="flex justify-center items-center flex-col px-5 py-10">
            <TbDeviceImacDollar className="text-9xl text-pink-400" />
            <p className="pt-5 font-semibold text-2xl text-gray-800">
            There are no users with idle time
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between space-x-2 pt-2">
        <div className="border border-red-500 rounded-lg px-5 py-5 bg-pink-200">
          <h2 className="font-bold text-2xl">Non Tracked Members</h2>
          <div className="flex justify-center items-center flex-col px-5 py-10">
            <TbDeviceImacDollar className="text-9xl text-pink-400" />
            <p className="pt-5 font-semibold text-2xl text-gray-800">
            Non tracked members found as empty
            </p>
          </div>
        </div>
        <div className="border border-red-500 rounded-lg px-5 py-5 bg-pink-200">
          <h2 className="font-bold text-2xl">Late Users</h2>
          <div className="flex justify-center items-center flex-col px-5 py-10">
            <TbDeviceImacDollar className="text-9xl text-pink-400" />
            <p className="pt-5 font-semibold text-2xl text-gray-800">
            Non late members found as empty
            </p>
          </div>
        </div>
        <div className="border border-red-500 rounded-lg px-5 py-5 bg-pink-200">
          <h2 className="font-bold text-2xl">On Leave Users</h2>
          <div className="flex justify-center items-center flex-col px-5 py-10">
            <TbDeviceImacDollar className="text-9xl text-pink-400" />
            <p className="pt-5 font-semibold text-2xl text-gray-800">
            Non leave members found as empty
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherInfo;
