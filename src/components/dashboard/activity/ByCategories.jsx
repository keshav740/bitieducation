import React, { useState } from 'react';

const ByCategories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageOffset, setPageOffset] = useState(0); // To track the offset for pagination slider
  const rowsPerPage = 10; // Number of rows to show per page
  const maxVisiblePages = 10; // Maximum number of visible page buttons

  // Sample data - expanded to include 40 entries
  const data = [
    { id: 1, category: "Office Apps", duration: "03:00", percentage: "10 %" },
    { id: 2, category: "Other Apps", duration: "03:00", percentage: "10 %" },
    { id: 3, category: "Social Media", duration: "03:00", percentage: "10 %" },
    { id: 4, category: "Development Tools", duration: "02:45", percentage: "9 %" },
    { id: 5, category: "Communication", duration: "03:30", percentage: "11 %" },
    { id: 6, category: "Design Tools", duration: "02:20", percentage: "8 %" },
    { id: 7, category: "Productivity", duration: "04:00", percentage: "12 %" },
    { id: 8, category: "Entertainment", duration: "01:50", percentage: "6 %" },
    { id: 9, category: "Utilities", duration: "03:15", percentage: "9 %" },
    { id: 10, category: "Gaming", duration: "02:00", percentage: "7 %" },
    { id: 11, category: "Office Apps", duration: "02:50", percentage: "8 %" },
    { id: 12, category: "Other Apps", duration: "03:20", percentage: "9 %" },
    { id: 13, category: "Social Media", duration: "02:40", percentage: "7 %" },
    { id: 14, category: "Development Tools", duration: "03:05", percentage: "8 %" },
    { id: 15, category: "Communication", duration: "03:45", percentage: "10 %" },
    { id: 16, category: "Design Tools", duration: "02:30", percentage: "8 %" },
    { id: 17, category: "Productivity", duration: "03:40", percentage: "11 %" },
    { id: 18, category: "Entertainment", duration: "02:10", percentage: "7 %" },
    { id: 19, category: "Utilities", duration: "03:25", percentage: "9 %" },
    { id: 20, category: "Gaming", duration: "02:15", percentage: "6 %" },
    { id: 21, category: "Office Apps", duration: "03:05", percentage: "9 %" },
    { id: 22, category: "Other Apps", duration: "02:55", percentage: "8 %" },
    { id: 23, category: "Social Media", duration: "03:10", percentage: "8 %" },
    { id: 24, category: "Development Tools", duration: "03:25", percentage: "10 %" },
    { id: 25, category: "Communication", duration: "03:30", percentage: "9 %" },
    { id: 26, category: "Design Tools", duration: "03:00", percentage: "7 %" },
    { id: 27, category: "Productivity", duration: "04:15", percentage: "12 %" },
    { id: 28, category: "Entertainment", duration: "01:55", percentage: "6 %" },
    { id: 29, category: "Utilities", duration: "03:10", percentage: "8 %" },
    { id: 30, category: "Gaming", duration: "02:30", percentage: "7 %" },
    { id: 31, category: "Office Apps", duration: "03:15", percentage: "9 %" },
    { id: 32, category: "Other Apps", duration: "03:00", percentage: "8 %" },
    { id: 33, category: "Social Media", duration: "02:50", percentage: "7 %" },
    { id: 34, category: "Development Tools", duration: "03:10", percentage: "9 %" },
    { id: 35, category: "Communication", duration: "03:35", percentage: "10 %" },
    { id: 36, category: "Design Tools", duration: "02:45", percentage: "8 %" },
    { id: 37, category: "Productivity", duration: "03:50", percentage: "11 %" },
    { id: 38, category: "Entertainment", duration: "02:05", percentage: "7 %" },
    { id: 39, category: "Utilities", duration: "03:20", percentage: "9 %" },
    { id: 40, category: "Gaming", duration: "02:10", percentage: "6 %" },
    { id: 41, category: "Design Tools", duration: "02:45", percentage: "8 %" },
    { id: 42, category: "Productivity", duration: "03:50", percentage: "11 %" },
    { id: 43, category: "Entertainment", duration: "02:05", percentage: "7 %" },
    { id: 44, category: "Utilities", duration: "03:20", percentage: "9 %" },
    { id: 45, category: "Gaming", duration: "02:10", percentage: "6 %" },
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
              <th className="px-6 py-3 border-b border-red-500">Category</th>
              <th className="px-6 py-3 border-b border-red-500">Duration</th>
              <th className="px-6 py-3 border-b border-red-500">Percentage</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row) => (
              <tr key={row.id} className="hover:bg-pink-200">
                <td className="px-6 py-4 border-b border-red-500">{row.category}</td>
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

export default ByCategories;
