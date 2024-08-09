import React from "react";
import { CiAlarmOn } from "react-icons/ci";
import ProductivityCharts from "./prductivity/ProductivityCharts";
import { TbDeviceImacDollar } from "react-icons/tb";
import ProductivityTable from "./prductivity/ProductivityTable";

const Productivity = () => {
  return (
    <div>
      <div className="flex items-center mt-2 space-x-1">
        <div className="flex flex-col items-center justify-center bg-pink-100 hover:bg-pink-200 px-10 py-5 rounded-lg transition duration-300">
          <div className="flex items-center space-x-2">
            <h4 className="font-semibold text-xl">Working Time </h4>
            <CiAlarmOn className=" text-sky-500" />
          </div>
          <p className="text-2xl text-sky-500 pt-2 font-semibold">11 : 20</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-pink-100 hover:bg-pink-200 px-10 py-5 rounded-lg transition duration-300">
          <div className="flex items-center space-x-2">
            <h4 className="font-semibold text-xl">Productive Time </h4>
            <CiAlarmOn className=" text-green-500" />
          </div>
          <p className="text-2xl text-green-500 pt-2 font-semibold">02 : 34</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-pink-100 hover:bg-pink-200 px-10 py-5 rounded-lg transition duration-300">
          <div className="flex items-center space-x-2">
            <h4 className="font-semibold text-xl">Non-Productive Time </h4>
            <CiAlarmOn className=" text-red-500" />
          </div>
          <p className="text-2xl text-red-500 pt-2 font-semibold">13 : 35</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-pink-100 hover:bg-pink-200 px-10 py-5 rounded-lg transition duration-300">
          <div className="flex items-center space-x-2">
            <h4 className="font-semibold text-xl">Neutral Time </h4>
            <CiAlarmOn className=" text-purple-500" />
          </div>
          <p className="text-2xl text-purple-500 pt-2 font-semibold">2</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-pink-100 hover:bg-pink-200 px-10 py-5 rounded-lg transition duration-300">
          <div className="flex items-center space-x-2">
            <h4 className="font-semibold text-xl">Away Time </h4>
            <CiAlarmOn className="text-gray-500" />
          </div>
          <p className="text-2xl text-gray-500 pt-2 font-semibold">1</p>
        </div>
      </div>

      <div className="flex justify-between py-2">
        <div className="bg-pink-200 rounded-xl flex py-5 px-6">
          <ProductivityCharts />
        </div>
        <div className="bg-pink-200 rounded-xl py-5 px-6 w-160">
        <div className="flex  justify-between bg-pink-200  py-5 px-6 items-center">
            <h2 className="text-2xl font-semibold">Productive Break Down</h2>
            <p>Exp - Expected Hours</p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-pink-100 border border-red-500">
              <thead>
                <tr className="w-full bg-pink-200 text-left text-gray-700">
                  <th className="px-6 py-3 border-b border-red-500">Activity</th>
                  <th className="px-6 py-3 border-b border-red-500">
                  Today
                  </th>
                  <th className="px-6 py-3 border-b border-red-500">
                  Yesterday
                  </th>
                  <th className="px-6 py-3 border-b border-red-500">
                  This Week
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-pink-200">
                  <td className="px-6 py-4 border-b border-red-500">
                    Row 1 Data 1
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                    Row 1 Data 2
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                    Row 1 Data 3
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                    Row 1 Data 3
                  </td>
                </tr>
                <tr className="hover:bg-pink-200">
                  <td className="px-6 py-4 border-b border-red-500">
                    Row 2 Data 1
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                    Row 2 Data 2
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                    Row 2 Data 3
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                    Row 2 Data 3
                  </td>
                </tr>
                <tr className="hover:bg-pink-200">
                  <td className="px-6 py-4 border-b border-red-500">
                    Row 3 Data 1
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                    Row 3 Data 2
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                    Row 2 Data 3
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                    Row 2 Data 3
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between space-x-2 pt-2">
        <div className="border border-red-500 rounded-lg px-5 py-5 bg-pink-200">
          <h2 className="font-semibold text-xl flex items-center">Most Productive Users<CiAlarmOn className="ml-2 text-green-500"/></h2>
          <div className="flex justify-center items-center flex-col px-5 py-10">
            <TbDeviceImacDollar className="text-9xl text-pink-400" />
            <p className="pt-5 font-semibold text-2xl text-gray-800">
              Productive users not yet tracked
            </p>
          </div>
        </div>
        <div className="border border-red-500 rounded-lg px-5 py-5 bg-pink-200">
          <h2 className="font-semibold text-xl flex items-center">Most Non-Productive Users<CiAlarmOn className="ml-2 text-red-500"/></h2>
          <div className="flex justify-center items-center flex-col px-5 py-10">
            <TbDeviceImacDollar className="text-9xl text-pink-400" />
            <p className="pt-5 font-semibold text-2xl text-gray-800">
              Non-Productive users not yet tracked
            </p>
          </div>
        </div>
        <div className="border border-red-500 rounded-lg px-5 py-5 bg-pink-200">
          <h2 className="font-semibold text-xl flex items-center">Idle Time Users<CiAlarmOn className="ml-2 text-purple-500"/></h2>
          <div className="flex justify-center items-center flex-col px-5 py-10">
            <TbDeviceImacDollar className="text-9xl text-pink-400" />
            <p className="pt-5 font-semibold text-2xl text-gray-800">
              There are no users with idle time
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between py-2">
        <div className="bg-pink-200 rounded-xl py-5 px-6 w-160">
          <div className="flex  justify-between bg-pink-200  py-5 px-6 items-center">
            <h2 className="text-2xl font-semibold">Category Break Down</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-pink-100 border border-red-500">
              <thead>
                <tr className="w-full bg-pink-200 text-left text-gray-700">
                  <th className="px-6 py-3 border-b border-red-500">Activity</th>
                  <th className="px-6 py-3 border-b border-red-500">
                    Today
                  </th>
                  <th className="px-6 py-3 border-b border-red-500">
                  Yesterday
                  </th>
                  <th className="px-6 py-3 border-b border-red-500">
                  This Week
                  </th>
                  
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-pink-200">
                  <td className="px-6 py-4 border-b border-red-500">
                    Row 1 Data 1
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                    Row 1 Data 2
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                    Row 1 Data 3
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                    Row 1 Data 3
                  </td>
                </tr>
                <tr className="hover:bg-pink-200">
                  <td className="px-6 py-4 border-b border-red-500">
                    Row 2 Data 1
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                    Row 2 Data 2
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                    Row 2 Data 3
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                    Row 2 Data 3
                  </td>
                </tr>
                <tr className="hover:bg-pink-200">
                  <td className="px-6 py-4 border-b border-red-500">
                    Row 3 Data 1
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                    Row 3 Data 2
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                    Row 3 Data 3
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                    Row 3 Data 3
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-pink-200 rounded-xl flex py-5 px-6">
          <ProductivityCharts />
        </div>
      </div>


      <ProductivityTable />
    </div>
  );
};

export default Productivity;
