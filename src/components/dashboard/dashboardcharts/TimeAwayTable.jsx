import React from "react";
import { FaDownload } from "react-icons/fa";

const TimeAwayTable = () => {
  return (
    <div>
      <div className="py-2 w-full">
        <div className="bg-pink-200 rounded-xl py-5 px-6">
          <div className="flex justify-between bg-pink-200  py-5 px-6">
            <h2 className="text-2xl font-semibold">Time Away From System Report
            </h2>
            <FaDownload className="cursor-pointer text-green-500 text-2xl" />
          </div>

          <div className="">
            <table className="min-w-full bg-pink-100 border border-red-500">
              <thead>
                <tr className="w-full bg-pink-200 text-left text-gray-700">
                  <th className="px-6 py-3 border-b border-red-500">Name</th>
                  <th className="px-6 py-3 border-b border-red-500">
                    Group Size
                  </th>
                  <th className="px-6 py-3 border-b border-red-500">
                    Active Users
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-pink-200">
                  <td className="px-6 py-4 border-b border-red-500">
                    Jitendra Yadav
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">1</td>
                  <td className="px-6 py-4 border-b border-red-500">1</td>
                </tr>
                <tr className="hover:bg-pink-200">
                  <td className="px-6 py-4 border-b border-red-500">
                    Keshav Saini
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">1</td>
                  <td className="px-6 py-4 border-b border-red-500">1</td>
                </tr>
                <tr className="hover:bg-pink-200">
                  <td className="px-6 py-4 border-b border-red-500">abcd</td>
                  <td className="px-6 py-4 border-b border-red-500">1</td>
                  <td className="px-6 py-4 border-b border-red-500">1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeAwayTable;
