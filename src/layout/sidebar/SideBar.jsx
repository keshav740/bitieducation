import React, { useState } from "react";
import { FaHouseChimneyUser, FaClock } from "react-icons/fa6";
import { IoMdFingerPrint } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
import { VscProject, VscGithubProject } from "react-icons/vsc";
import { GrTask } from "react-icons/gr";
import { MdLocalActivity, MdEmail } from "react-icons/md";
import { LuFileSpreadsheet } from "react-icons/lu";
import TimeTracke from "../../components/timetracker/TimeTracke";
import Employee from "../../components/hr/Employee";
import EmolpyeeList from "../../components/hr/EmployeeList";
import SingleEmployee from "../../components/hr/SingleEmployee";


const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleMouseEnter1 = () => {
    setDropdownOpen1(true);
  };

  const handleMouseLeave1 = () => {
    setDropdownOpen1(false);
  };

  const handleMouseEnter2 = () => {
    setDropdownOpen2(true);
  };

  const handleMouseLeave2 = () => {
    setDropdownOpen2(false);
  };

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleDropdown1 = () => {
    setDropdownOpen1(!dropdownOpen1);
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-pink-200 w-64 space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform ${
          open ? "" : "-translate-x-full"
        } md:relative md:translate-x-0 transition duration-200 ease-in-out overflow-y-auto`}
      >
        {/* Sidebar toggle button */}
        <button
          onClick={toggleSidebar}
          className="text-black hover:text-gray-500 md:hidden absolute top-2 right-2"
        >
          {open ? "Close" : "Open"} Menu
        </button>

        {/* Sidebar content */}
        <nav>
          <a
            href="/profile/username"
            className="flex items-center px-4 rounded transition duration-200 hover:bg-pink-300 py-5"
          >
            <FaHouseChimneyUser className="w-6 h-6 mr-2" />
            Home
          </a>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={toggleDropdown}
              className="flex items-center w-full  px-4 rounded transition duration-200 hover:bg-pink-300 py-5"
            >
              <FaClock className="w-6 h-6 mr-4" />
              Time Tracker
              <svg
                className={`w-6 h-6 ml-10 ${dropdownOpen ? "rotate-180" : ""}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.832.445l4.911 7a1 1 0 01-.832 1.555H5.089a1 1 0 01-.832-1.555l4.911-7A1 1 0 0110 3zM5.268 10h9.465L10 5.236 5.268 10zm9.465 1H5.268L10 14.764 14.733 11z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="bg-pink-100 rounded mt-1 py-1 space-y-1 px-10 hover:bg-pink-300">
                <a
                  href="#"
                  className="flex items-center  px-4 rounded transition duration-200  py-5"
                >
                  <IoMdFingerPrint className="w-6 h-6 mr-2" />
                  Attendence
                </a>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            <button
              onClick={toggleDropdown1}
              className="flex items-center w-full  px-4 rounded transition duration-200 hover:bg-pink-300 py-5"
            >
              <CgProfile className="w-6 h-6 mr-2" />
              HR
              <svg
                className={`w-6 h-6 ml-28 ${dropdownOpen1 ? "rotate-180" : ""}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.832.445l4.911 7a1 1 0 01-.832 1.555H5.089a1 1 0 01-.832-1.555l4.911-7A1 1 0 0110 3zM5.268 10h9.465L10 5.236 5.268 10zm9.465 1H5.268L10 14.764 14.733 11z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {dropdownOpen1 && (
              <div className="bg-pink-100 rounded mt-1 py-1 space-y-1 px-10 hover:bg-pink-300">
                <a
                  href="#"
                  className="flex items-center px-4 rounded transition duration-200  py-5"
                >
                  <ImProfile className="w-6 h-6 mr-2" />
                  Employees
                </a>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            <button
              onClick={toggleDropdown2}
              className="flex items-center w-full px-4 rounded transition duration-200 hover:bg-pink-300 py-5"
            >
              <VscProject className="w-6 h-6 mr-2" />
              Projects
              <svg
                className={`w-6 h-6 ml-20 ${dropdownOpen2 ? "rotate-180" : ""}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.832.445l4.911 7a1 1 0 01-.832 1.555H5.089a1 1 0 01-.832-1.555l4.911-7A1 1 0 0110 3zM5.268 10h9.465L10 5.236 5.268 10zm9.465 1H5.268L10 14.764 14.733 11z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {dropdownOpen2 && (
              <div className="bg-pink-100 rounded mt-1 py-1 space-y-1 px-10 hover:bg-pink-300">
                <a
                  href="#"
                  className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-pink-100 py-5 "
                >
                  <VscGithubProject className="w-6 h-6 mr-2" />
                  Projects
                </a>
                <a
                  href="#"
                  className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-pink-100 py-5"
                >
                  <GrTask className="w-6 h-6 mr-2" />
                  Taska
                </a>
                <a
                  href="#"
                  className="flex items-center py-2.5 px-4 rounded transition duration-200  py-5 hover:bg-pink-100"
                >
                  <MdLocalActivity className="w-6 h-6 mr-2" />
                  Activity
                </a>
              </div>
            )}
          </div>
          <a
            href="#"
            className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-pink-300 py-5"
          >
            <MdEmail className="w-6 h-6 mr-2" />
            Mails
          </a>
          <a
            href="#"
            className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-pink-300 py-5"
          >
            <LuFileSpreadsheet className="w-6 h-6 mr-2" />
            Spreadsheets
          </a>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-10 pt-20 pl-04 overflow-y-auto border-solid border  border-red-600 rounded-md bg-pink-100">
        {/* Your main content goes here */}
       <TimeTracke />
       <Employee />
       <EmolpyeeList />
       <SingleEmployee />
      </div>
    </div>
  );
};

export default SideBar;
