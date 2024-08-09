import React from "react";
import { FaDownload } from "react-icons/fa";

const ProductivityTable = () => {
  return (
    <div>
      <div className="py-2 w-full">
        <div className="bg-pink-200 rounded-xl py-5 px-6">
        <div className="flex justify-end bg-pink-200 py-5 px-6 space-x-6">
      <p className="relative before:content-[''] before:absolute before:w-2 before:h-2 before:bg-green-500 before:rounded-full before:right-20 before:top-1/2 before:transform before:-translate-y-1/2">
        Productive
      </p>
      <p className="relative before:content-[''] before:absolute before:w-2 before:h-2 before:bg-red-500 before:rounded-full before:right-28 before:top-1/2 before:transform before:-translate-y-1/2">
        Non-Productive
      </p>
      <p className="relative before:content-[''] before:absolute before:w-2 before:h-2 before:bg-yellow-500 before:rounded-full before:right-14 before:top-1/2 before:transform before:-translate-y-1/2">
        Neutral
      </p>
      <p className="relative before:content-[''] before:absolute before:w-2 before:h-2 before:bg-gray-500 before:rounded-full before:right-7 before:top-1/2 before:transform before:-translate-y-1/2">
        Idle
      </p>
      <p className="relative before:content-[''] before:absolute before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:right-10 before:top-1/2 before:transform before:-translate-y-1/2">
        Away
      </p>

      <FaDownload className="cursor-pointer text-green-500 text-2xl" />
    </div>

          <div className="">
            <table className="min-w-full bg-pink-100 border border-red-500">
              <thead>
                <tr className="w-full bg-pink-200 text-left text-gray-700">
                  <th className="px-6 py-3 border-b border-red-500">User</th>
                  <th className="px-6 py-3 border-b border-red-500">9AM</th>
                  <th className="px-6 py-3 border-b border-red-500">10AM</th>
                  <th className="px-6 py-3 border-b border-red-500">11AM</th>
                  <th className="px-6 py-3 border-b border-red-500">12PM</th>
                  <th className="px-6 py-3 border-b border-red-500">1PM</th>
                  <th className="px-6 py-3 border-b border-red-500">2PM</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-pink-200">
                  <td className="px-6 py-4 border-b border-red-500 relative before:content-[''] before:absolute before:w-2 before:h-2 before:bg-green-500 before:rounded-full before:left-1 before:top-1/2 before:transform before:-translate-y-1/2">
                    Jitendra Yadav
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                </tr>
                <tr className="hover:bg-pink-200">
                  <td className="px-6 py-4 border-b border-red-500 relative before:content-[''] before:absolute before:w-2 before:h-2 before:bg-green-500 before:rounded-full before:left-1 before:top-1/2 before:transform before:-translate-y-1/2">
                    Jitendra Yadav
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                  <td className="px-6 py-4 border-b border-red-500">00:00</td>
                </tr>
                <tr className="hover:bg-pink-200">
                  <td className="px-6 py-4 border-b border-red-500 relative before:content-[''] before:absolute before:w-2 before:h-2 before:bg-green-500 before:rounded-full before:left-1 before:top-1/2 before:transform before:-translate-y-1/2">
                    Jitendra Yadav
                  </td>
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

export default ProductivityTable;