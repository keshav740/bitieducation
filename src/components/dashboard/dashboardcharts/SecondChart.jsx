import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { FaGreaterThan } from "react-icons/fa6";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const SecondChart = () => {
  const data = {
    labels: [
      "Data A",
      "Data B",
      "Data C",
      "Data D",
   
    ],
    datasets: [
      {
        label: "My Dataset",
        data: [3, 10, 17, 21],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#808080",
        
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
            labels: currentLabels,
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
        
      </div>
    </div>
  );
};

export default SecondChart;
