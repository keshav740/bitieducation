import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

const ApplicationUsed = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageOffset, setPageOffset] = useState(0); // To track the offset for pagination slider
  const rowsPerPage = 10; // Number of rows to show per page
  const maxVisiblePages = 10; // Maximum number of visible page buttons

  // Sample data - this should be replaced with your actual data
  const data = [
    { id: 1, application: "Visual Studio Code", duration: "03:00", percentage: "10 %" },
    { id: 2, application: "Slack", duration: "02:30", percentage: "8 %" },
    { id: 3, application: "Chrome", duration: "01:45", percentage: "5 %" },
    { id: 4, application: "GitHub", duration: "04:00", percentage: "12 %" },
    { id: 5, application: "Jira", duration: "02:15", percentage: "7 %" },
    { id: 6, application: "Figma", duration: "03:30", percentage: "9 %" },
    { id: 7, application: "Notion", duration: "01:20", percentage: "4 %" },
    { id: 8, application: "Trello", duration: "02:45", percentage: "6 %" },
    { id: 9, application: "Zoom", duration: "03:10", percentage: "8 %" },
    { id: 10, application: "Asana", duration: "01:50", percentage: "5 %" },
    { id: 11, application: "VS Code", duration: "02:00", percentage: "6 %" },
    { id: 12, application: "Slack", duration: "03:00", percentage: "9 %" },
    { id: 13, application: "Chrome", duration: "01:35", percentage: "5 %" },
    { id: 14, application: "GitHub", duration: "02:20", percentage: "7 %" },
    { id: 15, application: "Jira", duration: "04:00", percentage: "10 %" },
    { id: 16, application: "Figma", duration: "03:00", percentage: "8 %" },
    { id: 17, application: "Notion", duration: "02:30", percentage: "7 %" },
    { id: 18, application: "Trello", duration: "01:40", percentage: "5 %" },
    { id: 19, application: "Zoom", duration: "02:50", percentage: "8 %" },
    { id: 20, application: "Asana", duration: "01:30", percentage: "4 %" },
    { id: 21, application: "VS Code", duration: "03:20", percentage: "10 %" },
    { id: 22, application: "Slack", duration: "02:50", percentage: "8 %" },
    { id: 23, application: "Chrome", duration: "01:55", percentage: "6 %" },
    { id: 24, application: "GitHub", duration: "03:10", percentage: "9 %" },
    { id: 25, application: "Jira", duration: "02:25", percentage: "7 %" },
    { id: 26, application: "Figma", duration: "04:00", percentage: "10 %" },
    { id: 27, application: "Notion", duration: "01:25", percentage: "4 %" },
    { id: 28, application: "Trello", duration: "03:05", percentage: "9 %" },
    { id: 29, application: "Zoom", duration: "02:20", percentage: "6 %" },
    { id: 30, application: "Asana", duration: "01:45", percentage: "5 %" },
    { id: 31, application: "VS Code", duration: "02:35", percentage: "7 %" },
    { id: 32, application: "Slack", duration: "03:15", percentage: "8 %" },
    { id: 33, application: "Chrome", duration: "02:00", percentage: "6 %" },
    { id: 34, application: "GitHub", duration: "03:30", percentage: "9 %" },
    { id: 35, application: "Jira", duration: "02:50", percentage: "8 %" },
    { id: 36, application: "Figma", duration: "03:15", percentage: "7 %" },
    { id: 37, application: "Notion", duration: "01:50", percentage: "5 %" },
    { id: 38, application: "Trello", duration: "03:00", percentage: "6 %" },
    { id: 39, application: "Zoom", duration: "02:10", percentage: "5 %" },
    { id: 40, application: "Asana", duration: "01:35", percentage: "4 %" },
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

  return (
    <div>
      <div className="h-160">
        <table className="min-w-full bg-pink-100 border border-red-500">
          <thead>
            <tr className="w-full bg-pink-200 text-left text-gray-700">
              <th className="px-6 py-3 border-b border-red-500">Productivity</th>
              <th className="px-6 py-3 border-b border-red-500">Applications</th>
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
                <td className="px-6 py-4 border-b border-red-500">
                  {row.application}
                </td>
                <td className="px-6 py-4 border-b border-red-500">
                  {row.duration}
                </td>
                <td className="px-6 py-4 border-b border-red-500">
                  {row.percentage}
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
          <div className="ml-4 text-xl font-bold">
          Total Rows : {data.length}
        </div>
      </div>
    </div>
  );
};

export default ApplicationUsed;
