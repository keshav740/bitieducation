import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa6";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const data = [
  // Example data (you can add more items as needed)
  {
    id: 1,
    date: "Item 1",
    email: "Item 1000",
    status: "successful",
    city: "New Delhi",
    ip: "122.176.107.237",
    browser: "Time Champ Agent",
  },
  {
    id: 2,
    date: "Item 2",
    email: "Item 1000",
    status: "successful",
    city: "New Delhi",
    ip: "122.176.107.237",
    browser: "Time Champ Agent",
  },
  {
    id: 3,
    date: "Item 3",
    email: "Item 1000",
    status: "successful",
    city: "New Delhi",
    ip: "122.176.107.237",
    browser: "Time Champ Agent",
  },
  {
    id: 4,
    date: "Item 4",
    email: "Item 1000",
    status: "successful",
    city: "New Delhi",
    ip: "122.176.107.237",
    browser: "Time Champ Agent",
  },
  {
    id: 5,
    date: "Item 5",
    email: "Item 1000",
    status: "successful",
    city: "New Delhi",
    ip: "122.176.107.237",
    browser: "Time Champ Agent",
  },
  {
    id: 6,
    date: "Item 6",
    email: "Item 1000",
    status: "successful",
    city: "New Delhi",
    ip: "122.176.107.237",
    browser: "Time Champ Agent",
  },
  {
    id: 7,
    date: "Item 7",
    email: "Item 1000",
    status: "successful",
    city: "New Delhi",
    ip: "122.176.107.237",
    browser: "Time Champ Agent",
  },
  {
    id: 8,
    date: "Item 8",
    email: "Item 1000",
    status: "successful",
    city: "New Delhi",
    ip: "122.176.107.237",
    browser: "Time Champ Agent",
  },
  {
    id: 9,
    date: "Item 9",
    email: "Item 1000",
    status: "successful",
    city: "New Delhi",
    ip: "122.176.107.237",
    browser: "Time Champ Agent",
  },
  {
    id: 10,
    date: "Item 10",
    email: "Item 1000",
    status: "successful",
    city: "New Delhi",
    ip: "122.176.107.237",
    browser: "Time Champ Agent",
  },
  {
    id: 11,
    date: "Item 11",
    email: "Item 1000",
    status: "successful",
    city: "New Delhi",
    ip: "122.176.107.237",
    browser: "Time Champ Agent",
  },
  {
    id: 12,
    date: "Item 12",
    email: "Item 1000",
    status: "successful",
    city: "New Delhi",
    ip: "122.176.107.237",
    browser: "Time Champ Agent",
  },
  {
    id: 13,
    date: "Item 13",
    email: "Item 1000",
    status: "successful",
    city: "New Delhi",
    ip: "122.176.107.237",
    browser: "Time Champ Agent",
  },
  {
    id: 14,
    date: "Item 14",
    email: "Item 1000",
    status: "successful",
    city: "New Delhi",
    ip: "122.176.107.237",
    browser: "Time Champ Agent",
  },
  {
    id: 15,
    date: "Item 15",
    email: "Item 1000",
    status: "successful",
    city: "New Delhi",
    ip: "122.176.107.237",
    browser: "Time Champ Agent",
  },
  {
    id: 16,
    date: "Item 16",
    email: "Item 1000",
    status: "successful",
    city: "New Delhi",
    ip: "122.176.107.237",
    browser: "Time Champ Agent",
  },
  {
    id: 17,
    date: "Item 17",
    email: "Item 1000",
    status: "successful",
    city: "New Delhi",
    ip: "122.176.107.237",
    browser: "Time Champ Agent",
  },
  {
    id: 18,
    date: "Item 18",
    email: "Item 1000",
    status: "successful",
    city: "New Delhi",
    ip: "122.176.107.237",
    browser: "Time Champ Agent",
  },
  {
    id: 19,
    date: "Item 19",
    email: "Item 1000",
    status: "successful",
    city: "New Delhi",
    ip: "122.176.107.237",
    browser: "Time Champ Agent",
  },
  {
    id: 20,
    date: "Item 20",
    email: "Item 1000",
    status: "successful",
    city: "New Delhi",
    ip: "122.176.107.237",
    browser: "Time Champ Agent",
  },
  {
    id: 21,
    date: "Item 21",
    email: "Item 1000",
    status: "successful",
    city: "New Delhi",
    ip: "122.176.107.237",
    browser: "Time Champ Agent",
  },
  {
    id: 22,
    date: "Item 22",
    email: "Item 1000",
    status: "successful",
    city: "New Delhi",
    ip: "122.176.107.237",
    browser: "Time Champ Agent",
  },
  {
    id: 23,
    date: "Item 23",
    email: "Item 1000",
    status: "successful",
    city: "New Delhi",
    ip: "122.176.107.237",
    browser: "Time Champ Agent",
  },
  {
    id: 24,
    date: "Item 24",
    email: "Item 1000",
    status: "successful",
    city: "New Delhi",
    ip: "122.176.107.237",
    browser: "Time Champ Agent",
  },
  // Add more items as needed
];

const itemsPerPage = 7;

const LoginAudit = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0]; // Format as YYYY-MM-DD
    setCurrentDate(today);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleDownload = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "User Data");
    
    // Generate buffer
    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    
    // Save file
    const blob = new Blob([wbout], { type: "application/octet-stream" });
    saveAs(blob, "user-data.xlsx");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-pink-100 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-pink-300 p-6 rounded-lg shadow-lg w-full max-w-4xl h-160 relative flex flex-col ">
        <div className="border-b border-red-500">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 hover:text-green-500 transition duration-300 font-semibold text-4xl"
          >
            &times;
          </button>
          <div className="mb-4 flex justify-evenly items-center bg-transparent">
            <h2 className="text-xl font-semibold text-gray-900">
              User Login History
            </h2>
            <div className="border-4 border-red-500 py-2 px-10 rounded-lg">
              <input
                type="date"
                value={currentDate}
                className="bg-transparent border-none outline-none"
                onChange={(e) => setCurrentDate(e.target.value)}
              />
            </div>
            <div className="border-4 border-red-500 py-2 px-10 rounded-lg">
              <input
                type="Text"
                className="bg-transparent focus:outline-none placeholder-blue-500"
                placeholder="Search..."
              />
            </div>
            <FaDownload
              onClick={handleDownload}
              className="text-black font-bold text-2xl cursor-pointer hover:text-green-500 transition duration-300"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto mt-10">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-pink-200">
              <tr>
                <th className="px-6 py-3 text-left text-lg text-gray-600 tracking-wider font-semibold">
                  Date Time
                </th>
                <th className="px-6 py-3 text-left text-lg text-gray-600 tracking-wider font-semibold">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-lg text-gray-600 tracking-wider font-semibold">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-lg text-gray-600 tracking-wider font-semibold">
                  City Name
                </th>
                <th className="px-6 py-3 text-left text-lg text-gray-600 tracking-wider font-semibold">
                  IP Address
                </th>
                <th className="px-6 py-3 text-left text-lg text-gray-600 tracking-wider font-semibold">
                  Browser
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-pink-100 transition duration-300"
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {item.email}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {item.status}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {item.city}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {item.ip}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {item.browser}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-start mt-4">
          <nav className="relative z-0 inline-flex shadow-sm">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
                  page === currentPage
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default LoginAudit;
