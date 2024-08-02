import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedDate, selectedTime } = location.state || {
    selectedDate: null,
    selectedTime: null,
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleConfirm = () => {
    // Add your confirm logic here
    alert("Confirmation successful!");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Confirmation</h1>
        <p className="text-lg mb-4">
          You have selected:
          <br />
          Date: <strong>{selectedDate}</strong>
          <br />
          Time: <strong>{selectedTime}</strong>
        </p>
        <div className="flex justify-between">
          <button
            onClick={handleGoBack}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200"
          >
            Go Back
          </button>
          <button
            onClick={handleConfirm}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
