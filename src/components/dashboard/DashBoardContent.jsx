// components/DashBoardContent.js
import React from "react";
import WebsitesCharts from "./dashboardcharts/WebsitesCharts";
import { FaDownload } from "react-icons/fa";
import SecondChart from "./dashboardcharts/SecondChart";
import OtherInfo from "./dashboardcharts/OtherInfo";
import FullTable from "./dashboardcharts/FullTable";
import BarChart from "./dashboardcharts/BarChart";
import TimeAwayTable from "./dashboardcharts/TimeAwayTable";
import AwayTimeGraph from "./dashboardcharts/AwayTimeGraph";

const DashBoardContent = () => {
  return (
    <div>
      <div className="flex items-center mt-2 justify-between">
        <div className="flex flex-col items-center justify-center bg-pink-100 hover:bg-pink-200 px-10 py-5 rounded-lg transition duration-300">
          <h4 className="font-semibold text-xl">Average Start Time</h4>
          <p className="text-2xl text-sky-500 pt-2 font-semibold">11 : 20</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-pink-100 hover:bg-pink-200 px-10 py-5 rounded-lg transition duration-300">
          <h4 className="font-semibold text-xl">Team Working Time</h4>
          <p className="text-2xl text-sky-500 pt-2 font-semibold">02 : 34</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-pink-100 hover:bg-pink-200 px-10 py-5 rounded-lg transition duration-300">
          <h4 className="font-semibold text-xl">Average Finish Time</h4>
          <p className="text-2xl text-sky-500 pt-2 font-semibold">13 : 35</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-pink-100 hover:bg-pink-200 px-10 py-5 rounded-lg transition duration-300">
          <h4 className="font-semibold text-xl">Team Members</h4>
          <p className="text-2xl text-sky-500 pt-2 font-semibold">2</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-pink-100 hover:bg-pink-200 px-10 py-5 rounded-lg transition duration-300">
          <h4 className="font-semibold text-xl">Tracked Members</h4>
          <p className="text-2xl text-sky-500 pt-2 font-semibold">1</p>
        </div>
      </div>
      <div className="flex justify-between py-2">
        <div className="bg-pink-200 rounded-xl flex py-5 px-6">
          <WebsitesCharts />
        </div>
        <div className="bg-pink-200 rounded-xl py-5 px-6 w-160">
          <div className="flex  justify-between bg-pink-200  py-5 px-6">
            <h2 className="text-2xl font-semibold">Work Hours (Avg)</h2>
            <FaDownload className="cursor-pointer text-green-500 text-2xl" />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-pink-100 border border-red-500">
              <thead>
                <tr className="w-full bg-pink-200 text-left text-gray-700">
                  <th className="px-6 py-3 border-b border-red-500">Name</th>
                  <th className="px-6 py-3 border-b border-red-500">
                    Man Days
                  </th>
                  <th className="px-6 py-3 border-b border-red-500">
                    Work Hours (Avg)
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
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Secon same section  */}

      <div className="flex justify-between py-2">
        <div className="bg-pink-200 rounded-xl py-5 px-6 w-170">
          <div className="flex  justify-between bg-pink-200  py-5 px-6">
            <h2 className="text-2xl font-semibold">Productivity Split
            </h2>
            <FaDownload className="cursor-pointer text-green-500 text-2xl" />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-pink-100 border border-red-500">
              <thead>
                <tr className="w-full bg-pink-200 text-left text-gray-700">
                  <th className="px-6 py-3 border-b border-red-500">Name</th>
                  <th className="px-6 py-3 border-b border-red-500">
                    Man Days                                        	
                  </th>
                  <th className="px-6 py-3 border-b border-red-500">
                  Over Worked	
                  </th>
                  <th className="px-6 py-3 border-b border-red-500">
                  Healthy
                  </th>
                  <th className="px-6 py-3 border-b border-red-500">
                  Under Worked
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-pink-200">
                  <td className="px-6 py-4 border-b border-red-500">
                  Jitendra Yadav
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                   1
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                   0
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                   0
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                   1
                  </td>
                </tr>
                <tr className="hover:bg-pink-200">
                  <td className="px-6 py-4 border-b border-red-500">
                  Keshav Saini
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                    1
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                    0
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                 0
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                    1
                  </td>
                </tr>
                <tr className="hover:bg-pink-200">
                  <td className="px-6 py-4 border-b border-red-500">
                    abcd
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                    1
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                    0
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                   0
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                   1
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-pink-200 rounded-xl flex py-5 px-6">
          <SecondChart />
        </div>
      </div>

      <OtherInfo />
      <FullTable />
      <BarChart />
      <TimeAwayTable />
      <AwayTimeGraph />
    </div>
  );
};

export default DashBoardContent;
