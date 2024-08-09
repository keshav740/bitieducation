import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

const InnerActivity = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageOffset, setPageOffset] = useState(0); // To track the offset for pagination slider
  const rowsPerPage = 10; // Number of rows to show per page
  const maxVisiblePages = 10; // Maximum number of visible page buttons

  // Sample data - expanded to include 45 entries
  const data = [
    {
      id: 1,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 2,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 3,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 4,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 5,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 6,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 7,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 8,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 9,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 10,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 11,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 12,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 13,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 14,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 15,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 16,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 17,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 18,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 19,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 20,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 21,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 22,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 23,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 24,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 25,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 26,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 27,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 28,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 29,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 30,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 31,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 32,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 33,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 34,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 35,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 36,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 37,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 38,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 39,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 40,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 41,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 42,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 43,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 44,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
    {
      id: 45,
      category: "Office Apps",
      date: "09-Aug-2024 12:27:38 IST",
      computer: "Lenovo PC - DESKTOP-RE1 Lenovo PC - DESKTOP-RE1",
      user: "Keshav Saini",
      duration: "00:00:01",
      title: "Time Champ - Pause or Resume Time Champ - Pause or Resume ",
      Description: "TimeChamp.exe TimeChamp.exe TimeChamp.exe",
      time: "No",
    },
  ];

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (
      pageNumber < pageOffset + 1 ||
      pageNumber > pageOffset + maxVisiblePages
    ) {
      // Adjust the pageOffset if the selected page is outside the visible range
      setPageOffset(Math.max(0, pageNumber - Math.floor(maxVisiblePages / 2)));
    }
  };

  const handlePreviousSlider = () => {
    setPageOffset(Math.max(0, pageOffset - maxVisiblePages));
  };

  const handleNextSlider = () => {
    setPageOffset(
      Math.min(totalPages - maxVisiblePages, pageOffset + maxVisiblePages)
    );
  };

  const truncateText = (text, maxLength = 15) => {
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  return (
    <div>
      <div className="h-160">
        <table className="min-w-full bg-pink-100 border border-red-500">
          <thead>
            <tr className="w-full bg-pink-200 text-left text-gray-700">
              <th className="px-6 py-3 border-b border-red-500">
                Productivity
              </th>
              <th className="px-6 py-3 border-b border-red-500">Date</th>
              <th className="px-6 py-3 border-b border-red-500">Computer</th>
              <th className="px-6 py-3 border-b border-red-500">User</th>
              <th className="px-6 py-3 border-b border-red-500">Duration</th>
              <th className="px-6 py-3 border-b border-red-500">Title</th>
              <th className="px-6 py-3 border-b border-red-500">Description</th>
              <th className="px-6 py-3 border-b border-red-500">Idle Time</th>
            </tr>
          </thead>

          <tbody>
            {currentRows.map((row) => (
              <tr key={row.id} className="hover:bg-pink-200">
                <td className="px-6 py-4 border-b border-red-500">
                  <FaQuestionCircle className="text-2xl text-pink-400" />
                </td>
                <td className="px-6 py-4 border-b border-red-500 relative group">
                  <span className="absolute hidden group-hover:block bg-red-400 text-white text-xs rounded py-1 px-2 z-10 -top-10 left-0 whitespace-nowrap">
                    {row.date}
                  </span>{" "}
                  {truncateText(row.date)}
                </td>

                <td className="px-6 py-4 border-b border-red-500 relative group">
                  <span className="absolute hidden group-hover:block bg-red-400 text-white text-xs rounded py-1 px-2 z-10 -top-10 left-0 whitespace-nowrap">
                    {row.computer}
                  </span>{" "}
                  {truncateText(row.computer)}
                </td>

                <td className="px-6 py-4 border-b border-red-500 relative group">
                  <span className="absolute hidden group-hover:block bg-red-400 text-white text-xs rounded py-1 px-2 z-10 -top-10 left-0 whitespace-nowrap">
                    {row.user}
                  </span>{" "}
                  {truncateText(row.user)}
                </td>

                <td className="px-6 py-4 border-b border-red-500 relative group">
                  <span className="absolute hidden group-hover:block bg-red-400 text-white text-xs rounded py-1 px-2 z-10 -top-10 left-0 whitespace-nowrap">
                    {row.duration}
                  </span>{" "}
                  {truncateText(row.duration)}
                </td>
                <td className="px-6 py-4 border-b border-red-500 relative group">
                  <span className="absolute hidden group-hover:block bg-red-400 text-white text-xs rounded py-1 px-2 z-10 -top-10 left-0 whitespace-nowrap">
                    {row.title}
                  </span>{" "}
                  {truncateText(row.title)}
                </td>
                <td className="px-6 py-4 border-b border-red-500 relative group">
                  <span className="absolute hidden group-hover:block bg-red-400 text-white text-xs rounded py-1 px-2 z-10 -top-10 left-0 whitespace-nowrap">
                    {row.Description}
                  </span>{" "}
                  {truncateText(row.Description)}
                </td>
                <td className="px-6 py-4 border-b border-red-500 relative group">
                  <span className="absolute hidden group-hover:block bg-red-400 text-white text-xs rounded py-1 px-2 z-10 -top-10 left-0 whitespace-nowrap">
                    {row.time}
                  </span>{" "}
                  {truncateText(row.time)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            className="px-4 py-2 bg-green-400 rounded disabled:bg-green-200"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="flex space-x-2 mx-4">
            <button
              onClick={handlePreviousSlider}
              className="px-4 py-2 bg-green-400 rounded disabled:bg-green-200"
              disabled={pageOffset === 0}
            >
              &lt;&lt;
            </button>
            {Array.from(
              { length: Math.min(maxVisiblePages, totalPages - pageOffset) },
              (_, index) => (
                <button
                  key={index + pageOffset + 1}
                  onClick={() => handlePageClick(index + pageOffset + 1)}
                  className={`px-4 py-2 rounded-full ${
                    currentPage === index + pageOffset + 1
                      ? "bg-green-500 text-white"
                      : "bg-pink-400"
                  }`}
                >
                  {index + pageOffset + 1}
                </button>
              )
            )}
            <button
              onClick={handleNextSlider}
              className="px-4 py-2 bg-green-400 rounded disabled:bg-green-200"
              disabled={pageOffset + maxVisiblePages >= totalPages}
            >
              &gt;&gt;
            </button>
          </div>
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            className="px-4 py-2 bg-green-400 rounded disabled:bg-green-200"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        {/* Total Rows Display */}
        <div className="ml-4 text-xl font-bold">Total Rows : {data.length}</div>
      </div>
    </div>
  );
};

export default InnerActivity;
