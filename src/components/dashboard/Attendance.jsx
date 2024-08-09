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

      <div className="py-2 h-160">
        <div className="bg-pink-200 rounded-xl py-5 px-6">
          <div className="">
            <table className="min-w-full bg-pink-100 border border-red-500">
              <thead>
                <tr className="w-full bg-pink-200 text-left text-gray-700">
                  <th className="px-6 py-3 border-b border-red-500">ID</th>
                  <th className="px-6 py-3 border-b border-red-500">User</th>
                  <th className="px-6 py-3 border-b border-red-500">In Time</th>
                  <th className="px-6 py-3 border-b border-red-500">
                    Last Seen
                  </th>
                  <th className="px-6 py-3 border-b border-red-500">
                    Working Hours
                  </th>
                  <th className="px-6 py-3 border-b border-red-500">
                    Productive Hours
                  </th>
                  <th className="px-6 py-3 border-b border-red-500">
                    Idel Hours
                  </th>
                  <th className="px-6 py-3 border-b border-red-500">
                    Online Hours
                  </th>
                  <th className="px-6 py-3 border-b border-red-500">7:00 AM</th>
                  <th className="px-6 py-3 border-b border-red-500">9:00 AM</th>
                  <th className="px-6 py-3 border-b border-red-500">
                    11:00 AM
                  </th>
                  <th className="px-6 py-3 border-b border-red-500">1:00 PM</th>
                  <th className="px-6 py-3 border-b border-red-500">7:00 AM</th>
                  <th className="px-6 py-3 border-b border-red-500">9:00 AM</th>
                  <th className="px-6 py-3 border-b border-red-500">
                    11:00 AM
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-pink-200">
                  <td className="px-6 py-4 border-b border-red-500">
                    Jitendra Yadav
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                </tr>
                <tr className="hover:bg-pink-200">
                  <td className="px-6 py-4 border-b border-red-500">
                    Keshav Saini
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                </tr>
                <tr className="hover:bg-pink-200">
                  <td className="px-6 py-4 border-b border-red-500">abcd</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
