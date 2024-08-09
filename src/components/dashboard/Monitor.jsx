import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScreenRecording from "./monitor/ScreenRecording";
import ScreenShots from "./monitor/ScreenShots";

const Monitor = () => {
  const [activeLink, setActiveLink] = useState("ScreenRecording");
  const [isToggled, setIsToggled] = useState(false);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const linkClasses = (linkName) =>
    `relative flex items-center py-2 px-4 rounded transition duration-200 ${
      activeLink === linkName
        ? "text-green-500 bg-pink-100 font-bold"
        : "hover:bg-pink-200 bg-pink-100 font-semibold"
    }`;

  const renderContent = () => {
    switch (activeLink) {
      case "ScreenRecording":
        return <ScreenRecording />;
      case "ScreenShots":
        return <ScreenShots />;
      default:
        return null;
    }
  };

  return (
    <div className="h-160">
      <div className="flex justify-between items-center mt-5 border-b border-red-500 pb-2">
        <div className="flex items-center space-x-4 border-b-2 border-green-700">
          <Link
            to="#"
            className={linkClasses("ScreenRecording")}
            onClick={() => handleLinkClick("ScreenRecording")}
          >
            <span className="relative z-10">Screen Recording</span>
            {activeLink === "ScreenRecording" && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-500 transform scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            )}
          </Link>
          <Link
            to="#"
            className={linkClasses("ScreenShots")}
            onClick={() => handleLinkClick("ScreenShots")}
          >
            <span className="relative z-10">ScreenShots</span>
            {activeLink === "ScreenShots" && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-500 transform scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            )}
          </Link>
        </div>

        {activeLink !== "ScreenShots" && (
          <div className="flex items-center space-x-4">
            <label className="flex items-center cursor-pointer">
              <div className="relative group">
                <input
                  type="checkbox"
                  checked={isToggled}
                  onChange={handleToggle}
                  className="sr-only"
                />
                <div
                  className={`w-12 h-6 rounded-full shadow-inner transition-colors duration-300 ${
                    isToggled
                      ? "bg-gradient-to-r from-green-400 to-blue-500"
                      : "bg-gray-300"
                  }`}
                >
                  <span className="absolute hidden group-hover:block bg-red-400 text-white text-xs rounded py-1 px-2 z-10 -top-10 left-0 whitespace-nowrap">
                    {isToggled
                      ? "Open Full Video Mode"
                      : "Close Full Video Mode"}
                  </span>
                </div>
                <div
                  className={`absolute top-0 left-0 w-6 h-6 bg-white rounded-full shadow-lg transform transition-transform duration-300 ease-out ${
                    isToggled ? "translate-x-6" : "translate-x-0"
                  }`}
                ></div>
              </div>
              <span className="ml-3 text-gray-700 font-medium">
                {isToggled ? "Enabled" : "Disabled"}
              </span>
            </label>
          </div>
        )}

        {activeLink == "ScreenShots" && activeLink !== "ScreenRecording" && (
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search...."
              className="outline-none focus:outline-none bg-pink-200 p-2 rounded-lg flex-1 font-semibold"
            />
          </div>
        )}
      </div>
      <div className="mt-5">{renderContent()}</div>
    </div>
  );
};

export default Monitor;
