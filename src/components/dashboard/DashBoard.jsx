import React, { useState } from "react";
import { ImProfile } from "react-icons/im";
import { Link } from "react-router-dom";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import ProfileModal from "../modal/ProfileModal";
import { IoMdRefresh } from "react-icons/io";
import { MdOutlineFullscreen } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import DashBoardContent from "./DashBoardContent";
import Attendance from "./Attendance";
import Productivity from "./Productivity";
import Monitor from "./Monitor";
import Activity from "./Activity";
import TimeClaim from "./TimeClaim";

const DashBoard = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [selectedTimezone, setSelectedTimezone] = useState("IST");
  const [isModalVisible, setIsModalVisible] = useState(false); // State to manage modal visibility
  const [activeLink, setActiveLink] = useState("Dashboard");

  const handleDateChange = (direction) => {
    const currentDate = new Date(selectedDate);
    if (direction === "next") {
      currentDate.setDate(currentDate.getDate() + 1);
    } else if (direction === "previous") {
      currentDate.setDate(currentDate.getDate() - 1);
    }
    setSelectedDate(currentDate.toISOString().split("T")[0]);
  };

  const handleTimezoneChange = (e) => {
    setSelectedTimezone(e.target.value);
  };

  const handleMouseEnter = () => {
    setIsModalVisible(true);
  };

  // State to manage the active button
  const [activeButton, setActiveButton] = useState("Day");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const buttonClasses = (buttonName) =>
    `rounded-full px-5 transition duration-300 ${
      activeButton === buttonName
        ? "border-4 border-red-500 transition duration-300"
        : ""
    }`;

  // Get today's date to disable the next button if the selected date is the same or after today
  const today = new Date().toISOString().split("T")[0];
  const isNextDisabled = selectedDate >= today;

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const linkClasses = (linkName) =>
    `flex items-center py-2 px-4 rounded transition duration-200 ${
      activeLink === linkName
        ? "bg-green-500 text-white border-l-4 border-r-4 border-red-500 hover:bg-green-600"
        : "hover:bg-pink-200 bg-pink-100 border-l-4 border-r-4 border-green-500"
    }`;

  const renderContent = () => {
    switch (activeLink) {
      case "Dashboard":
        return <DashBoardContent />;
      case "Attendance":
        return <Attendance />;
      case "Productivity":
        return <Productivity />;
      case "Activity":
        return <Activity />;
      case "Monitor":
        return <Monitor />;
      case "Time Claim":
        return <TimeClaim />;
      default:
        return <DashBoardContent />;
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row p-2 h-auto">
        <div className="w-full md:w-1/3 md:p-4 p-0 bg-pink-200">
          <div className="flex justify-between border border-red-500 p-2 rounded-lg">
            <Link
              to="#"
              className="hover:bg-pink-100 hover:text-green-500 transition duration-300 rounded-lg p-2 font-semibold"
            >
              Employess
            </Link>
            <Link
              to="#"
              className="hover:bg-pink-100 hover:text-green-500 transition duration-300 rounded-lg p-2 font-semibold"
            >
              Teams
            </Link>
            <Link
              to="#"
              className="hover:bg-pink-100 hover:text-green-500 transition duration-300 rounded-lg p-2 font-semibold"
            >
              Managers
            </Link>
          </div>
          <div className="hover:bg-pink-200 transition duration-300 border border-red-500 p-2 mt-2 bg-pink-100 rounded-lg">
            <Link
              to="#"
              className="flex justify-between font-semibold"
              onMouseEnter={handleMouseEnter}
            >
              <ul className="marker:text-green-500 marker:text-2xl list-outside list-disc ml-6">
                <li className="">bitieducation</li>
              </ul>
              <span></span>
            </Link>
            <div className="group ml-6">
              <Link to="" className="ml-6">
                keshav saini - Google chrome
              </Link>
              <span className="hidden group-hover:inline-block  ml-2  text-black absolute left-1/2 transform -translate-x-1/2 mt-5 w-auto transition duration-300 text-sm bg-pink-300 rounded-lg shadow-lg p-2 text-center">
                Keshav Saimi
              </span>
            </div>
          </div>
          <div className="hover:bg-pink-200 transition duration-300 border border-red-500 p-2 mt-2 bg-pink-100 rounded-lg">
            <Link
              to="#"
              className="flex justify-between font-semibold"
              onMouseEnter={handleMouseEnter}
            >
              <ul className="marker:text-green-500 marker:text-2xl list-outside list-disc ml-6">
                <li className="">bitieducation</li>
              </ul>
              <span></span>
            </Link>
            <div className="group ml-6">
              <Link to="" className="ml-6">
                keshav saini - Google chrome
              </Link>
              <span className="hidden group-hover:inline-block  ml-2  text-black absolute left-1/2 transform -translate-x-1/2 mt-5 w-auto transition duration-300 text-sm bg-pink-300 rounded-lg shadow-lg p-2 text-center">
                Keshav Saimi
              </span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-7/10 p-4 bg-pink-300">
          <div className="flex flex-col md:flex-row md:justify-between mb-5">
            <Link
              to="#"
              className="bg-transparent hover:text-green-500 transition duration-300 font-semibold hover:bg-pink-200 rounded-lg font px-10 overflow-hidden group"
            >
              <div className="text-center p-2">
                <div className="flex items-center space-x-1">
                  <ImProfile className="text-xl" />
                  <p>Employee Name</p>
                </div>
              </div>
            </Link>

            <div className="font-semibold rounded-lg px-5 overflow-hidden group flex items-center">
              <div
                onClick={() => handleDateChange("previous")}
                className="cursor-pointer bg-pink-400 rounded-full p-2"
              >
                <GrFormPrevious className="text-2xl" />
              </div>
              <div className="text-center p-2">
                <input
                  type="date"
                  className="bg-transparent rounded-xl px-2 focus:outline-none border-4 border-pink-400 cursor-pointer"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>
              <div
                onClick={
                  !isNextDisabled ? () => handleDateChange("next") : undefined
                }
                className={`cursor-pointer bg-pink-400 rounded-full p-2 ${
                  isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <GrFormNext className="text-2xl" />
              </div>

              <div className="flex items-center ml-3">
                <select
                  className="bg-transparent border-2 border-pink-400 rounded-lg px-2 py-1 focus:outline-none cursor-pointer"
                  value={selectedTimezone}
                  onChange={handleTimezoneChange}
                >
                  <option value="IST">IST</option>
                  <option value="EST">EST</option>
                  <option value="PST">PST</option>
                  <option value="GMT">GMT</option>
                </select>
              </div>
            </div>

            <div className="flex bg-pink-200 rounded-full space-x-5">
              <button
                className={buttonClasses("Day")}
                onClick={() => handleButtonClick("Day")}
              >
                Day
              </button>
              <button
                className={buttonClasses("Week")}
                onClick={() => handleButtonClick("Week")}
              >
                Week
              </button>
              <button
                className={buttonClasses("Month")}
                onClick={() => handleButtonClick("Month")}
              >
                Month
              </button>
              <button
                className={buttonClasses("Range")}
                onClick={() => handleButtonClick("Range")}
              >
                Range
              </button>
            </div>
          </div>

          {/* Starting Creating Dashboard Menu */}

          <div className="flex justify-between items-center border-b-4 border-red-500">
            <div className="flex items-center space-x-2 font-semibold">
              <Link
                to="#"
                className={linkClasses("Dashboard")}
                onClick={() => handleLinkClick("Dashboard")}
              >
                Dashboard
              </Link>
              <Link
                to="#"
                className={linkClasses("Attendance")}
                onClick={() => handleLinkClick("Attendance")}
              >
                Attendance
              </Link>
              <Link
                to="#"
                className={linkClasses("Productivity")}
                onClick={() => handleLinkClick("Productivity")}
              >
                Productivity
              </Link>
              <Link
                to="#"
                className={linkClasses("Activity")}
                onClick={() => handleLinkClick("Activity")}
              >
                Activity
              </Link>
              <Link
                to="#"
                className={linkClasses("Monitor")}
                onClick={() => handleLinkClick("Monitor")}
              >
                Monitor
              </Link>
              <Link
                to="#"
                className={linkClasses("Time Claim")}
                onClick={() => handleLinkClick("Time Claim")}
              >
                Time Claim
              </Link>
            </div>
            <div className="flex items-center space-x-2 text-2xl font-semibold ">
              <IoMdRefresh className="cursor-pointer hover:text-green-500 transition duration-300" />
              <MdOutlineFullscreen className="cursor-pointer hover:text-green-500 transition duration-300" />
              <FaRegQuestionCircle className="cursor-pointer hover:text-green-500 transition duration-300" />
            </div>
          </div>

          {/* Render the dynamic content */}
          {renderContent()}
        </div>
      </div>

      <ProfileModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </>
  );
};

export default DashBoard;
