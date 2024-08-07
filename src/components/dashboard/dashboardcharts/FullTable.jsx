import React from 'react'
import { FaDownload } from 'react-icons/fa'

const FullTable = () => {
  return (
    <div>
      <div className="py-2 w-full">
        <div className="bg-pink-200 rounded-xl py-5 px-6">
          <div className="flex justify-between bg-pink-200  py-5 px-6">
            <h2 className="text-2xl font-semibold">Work Time Metrics

            </h2>
            <FaDownload className="cursor-pointer text-green-500 text-2xl" />
          </div>

          <div className="">
            <table className="min-w-full bg-pink-100 border border-red-500">
              <thead>
                <tr className="w-full bg-pink-200 text-left text-gray-700">
                  <th className="px-6 py-3 border-b border-red-500">Name</th>
                  <th className="px-6 py-3 border-b border-red-500">
                  Logged Hours (Avg)                                       	
                  </th>
                  <th className="px-6 py-3 border-b border-red-500">
                  Active Time (Avg)
                  </th>
                  <th className="px-6 py-3 border-b border-red-500">
                  Approved Away Time (Avg)
                  </th>
                  <th className="px-6 py-3 border-b border-red-500">
                  Idle Hours (Avg)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-pink-200">
                  <td className="px-6 py-4 border-b border-red-500">
                  Jitendra Yadav
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                  00:00
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                  00:00
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                  00:00
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                  00:00
                  </td>
                </tr>
                <tr className="hover:bg-pink-200">
                  <td className="px-6 py-4 border-b border-red-500">
                  Keshav Saini
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                  00:00
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                  00:00
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                  00:00
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                  00:00
                  </td>
                </tr>
                <tr className="hover:bg-pink-200">
                  <td className="px-6 py-4 border-b border-red-500">
                    abcd
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                  00:00
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                  00:00
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                  00:00
                  </td>
                  <td className="px-6 py-4 border-b border-red-500">
                  00:00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullTable
