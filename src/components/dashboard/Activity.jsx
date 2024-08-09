import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPencil } from "react-icons/fa6";
import WebsitesVisited from "./activity/WebsitesVisited";
import ApplicationUsed from "./activity/ApplicationUsed";
import ByCategories from "./activity/ByCategories";
import InnerActivity from "./activity/InnerActivity";

const Activity = () => {
  const [activeLink, setActiveLink] = useState("WebsitesVisited");

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const linkClasses = (linkName) =>
    `relative flex items-center py-2 px-4 rounded transition duration-200 ${
      activeLink === linkName
        ? "text-green-500 bg-pink-100 font-bold"
        : "hover:bg-pink-200 bg-pink-100 font-semibold"
    }`;

  const renderContent = () => {
    switch (activeLink) {
      case "WebsitesVisited":
        return <WebsitesVisited />;
      case "ApplicationsUsed":
        return <ApplicationUsed />;
      case "ByCategories":
        return <ByCategories />;
      case "ActivityInner":
        return <InnerActivity />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mt-5">
        <div className="flex items-center space-x-4 border-b-2 border-green-700">
          <Link
            to="#"
            className={linkClasses("WebsitesVisited")}
            onClick={() => handleLinkClick("WebsitesVisited")}
          >
            <span className="relative z-10">Websites Visited</span>
            {activeLink === "WebsitesVisited" && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-500 transform scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            )}
          </Link>
          <Link
            to="#"
            className={linkClasses("ApplicationsUsed")}
            onClick={() => handleLinkClick("ApplicationsUsed")}
          >
            <span className="relative z-10">Applications Used</span>
            {activeLink === "ApplicationsUsed" && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-500 transform scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            )}
          </Link>
          <Link
            to="#"
            className={linkClasses("ByCategories")}
            onClick={() => handleLinkClick("ByCategories")}
          >
            <span className="relative z-10">By Categories</span>
            {activeLink === "ByCategories" && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-500 transform scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            )}
          </Link>
          <Link
            to="#"
            className={linkClasses("ActivityInner")}
            onClick={() => handleLinkClick("ActivityInner")}
          >
            <span className="relative z-10">Activity</span>
            {activeLink === "ActivityInner" && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-500 transform scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            )}
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search...."
            className="outline-none focus:outline-none bg-pink-200 p-2 rounded-lg flex-1 font-semibold"
          />
          <select className="p-2 rounded-lg bg-pink-200">
            <option value="option1">All</option>
            <option value="option2">Productive</option>
            <option value="option3">Non-Productive</option>
            <option value="option4">Neutral</option>
          </select>
          {/* Conditionally render the FaPencil icon */}
          {activeLink !== "ByCategories" && activeLink !== "ActivityInner" && (
            <FaPencil className="text-2xl cursor-pointer text-green-500" />
          )}
        </div>
      </div>
      <div className="mt-5">{renderContent()}</div>
    </div>
  );
};

export default Activity;
