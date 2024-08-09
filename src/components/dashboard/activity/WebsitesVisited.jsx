import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

const WebsitesVisited = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageOffset, setPageOffset] = useState(0); // To track the offset for pagination slider
  const rowsPerPage = 10;
  const maxVisiblePages = 10; // Maximum number of visible page buttons

  const data = [
    {
      id: 1,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 2,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "11 %",
    },
    {
      id: 3,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "12 %",
    },
    {
      id: 4,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "13 %",
    },
    {
      id: 5,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "14 %",
    },
    {
      id: 6,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "15 %",
    },
    {
      id: 7,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "16 %",
    },
    {
      id: 8,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "17 %",
    },
    {
      id: 9,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "18 %",
    },
    {
      id: 10,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "19 %",
    },
    {
      id: 11,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "20 %",
    },
    {
      id: 12,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 13,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 14,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 15,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 16,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 17,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 18,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 19,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 20,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 21,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 22,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 23,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 24,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 25,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 26,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 27,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 28,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 29,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 30,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 31,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 32,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 33,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 34,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 35,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 36,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 37,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 38,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
    {
      id: 39,
      website: "bitieducation.sites3.timechamp.io",
      duration: "03:00",
      percentage: "10 %",
    },
  ];


  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (pageNumber < pageOffset + 1 || pageNumber > pageOffset + maxVisiblePages) {
      // Adjust the pageOffset if the selected page is outside the visible range
      setPageOffset(Math.max(0, pageNumber - Math.floor(maxVisiblePages / 2)));
    }
  };

  const handlePreviousSlider = () => {
    setPageOffset(Math.max(0, pageOffset - maxVisiblePages));
  };

  const handleNextSlider = () => {
    setPageOffset(Math.min(totalPages - maxVisiblePages, pageOffset + maxVisiblePages));
  };

  return (
    <div>
      <div className="h-160">
        <table className="min-w-full bg-pink-100 border border-red-500">
          <thead>
            <tr className="w-full bg-pink-200 text-left text-gray-700">
              <th className="px-6 py-3 border-b border-red-500">Productivity</th>
              <th className="px-6 py-3 border-b border-red-500">Websites</th>
              <th className="px-6 py-3 border-b border-red-500">Duration</th>
              <th className="px-6 py-3 border-b border-red-500">Percentage</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row) => (
              <tr key={row.id} className="hover:bg-pink-200">
                <td className="px-6 py-4 border-b border-red-500">
                  <FaQuestionCircle className="text-2xl text-pink-400" />
                </td>
                <td className="px-6 py-4 border-b border-red-500">{row.website}</td>
                <td className="px-6 py-4 border-b border-red-500">{row.duration}</td>
                <td className="px-6 py-4 border-b border-red-500">{row.percentage}</td>
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
            {Array.from({ length: Math.min(maxVisiblePages, totalPages - pageOffset) }, (_, index) => (
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
            ))}
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
        <div className="ml-4 text-xl font-bold">
          Total Rows : {data.length}
        </div>
      </div>
    </div>
  );
};

export default WebsitesVisited;
