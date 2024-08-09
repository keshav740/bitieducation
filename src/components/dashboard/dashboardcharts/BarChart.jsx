import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components for ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  // Define the data for the bar chart
  const data = {
    labels: ["2024-08-01", "2024-08-02", "2024-08-03", "2024-08-04", "2024-08-05"], // Example dates
    datasets: [
      {
        label: "Hours",
        data: [2, 1.5, 3, 4, 2.5], // Example away time in hours
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Define options for the bar chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Work vs Life Balance",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Hours",
        },
        min: 0,
        max: 8,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="w-full mt-10 p-4">
      <div className="w-full p-4 bg-pink-200 shadow-lg rounded-lg mx-auto">
       
        <div className="p-4 bg-gray-100 rounded-lg">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default BarChart;