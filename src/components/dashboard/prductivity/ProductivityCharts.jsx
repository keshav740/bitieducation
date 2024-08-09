import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { FaGreaterThan } from "react-icons/fa6";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const ProductivityCharts = () => {
  const data = {
    labels: [
      "Data A",
      "Data B",
      "Data C",
      "Data D",
      "Data E",
    ],
    datasets: [
      {
        label: "My Dataset",
        data: [3, 10, 17, 21, 13],
        backgroundColor: [
          "#FFA500",
          "#A020F0",
          "#FF00FF",
          "#5DBB63",
          "#A94064",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    maintainAspectRatio: false,
  };

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const currentLabels = data.labels.slice(startIdx, endIdx);
  const currentData = data.datasets[0].data.slice(startIdx, endIdx);
  const totalPages = Math.ceil(data.labels.length / itemsPerPage);

  const handlePrevClick = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  return (
    <div className="flex items-center space-x-4 px-10">
      <div style={{ position: "", height: "300px", width: "300px" }}>
        <Doughnut
          data={{
           
            datasets: [
              {
                ...data.datasets[0],
                data: currentData,
              },
            ],
          }}
          options={options}
        />
      </div>
      <div className="mt-4">
        {currentLabels.map((label, index) => (
          <div key={index} className="flex items-center">
            <div
              className="w-4 h-4 mr-2"
              style={{
                backgroundColor:
                  data.datasets[0].backgroundColor[startIdx + index],
              }}
            ></div>
            <span className="font-medium">
              {label}: {currentData[index]}%
            </span>
          </div>
        ))}
        <div className="flex items-center mt-20 ml-28">
          <FaGreaterThan
            className="rotate-180  cursor-pointer"
            onClick={handlePrevClick}
          />
          <h3 className="mx-2 text-green-500 font-bold">
            {currentPage} / {totalPages}
          </h3>
          <FaGreaterThan
            onClick={handleNextClick}
            className=" cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductivityCharts;
