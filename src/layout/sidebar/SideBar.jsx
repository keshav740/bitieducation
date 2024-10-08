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
import TopBar from "../../components/projects/TopBar";
import { MdDashboard } from "react-icons/md";
import { SiProducthunt } from "react-icons/si";
import { LuMonitorPlay } from "react-icons/lu";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { RiLiveFill } from "react-icons/ri";
import { PiTreeStructureDuotone } from "react-icons/pi";
import { TbSettingsPause } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { VscReport } from "react-icons/vsc";
import { FaUsers } from "react-icons/fa6";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { PiMicrosoftTeamsLogoLight } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import Exports from "../../components/profile/Exports";
import { Link } from "react-router-dom";
import DashBoard from "../../components/dashboard/DashBoard";


const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpenOffice, setDropdownOpenOffice] = useState(false);

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

  const handleMouseEnterOffice = () => {
    setDropdownOpenOffice(true);
  };

  const handleMouseLeaveOffice = () => {
    setDropdownOpenOffice(false);
  };

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleDropdownOffice = () => {
    setDropdownOpenOffice(!dropdownOpenOffice);
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
        className={`bg-pink-200 w-64 space-y-6 py-7  px-2 fixed inset-y-0 left-0 transform ${
          open ? "" : "-translate-x-full"
        } md:relative md:translate-x-0 transition duration-200 ease-in-out overflow-y-auto`}
      >
        <Link
          to="/"
          className="flex items-center py-2 px-4 rounded transition duration-200 hover:bg-pink-300 bg-pink-100 border-l-4 border-r-4 border-pink-400"
        >
          <FaHouseChimneyUser className="w-6 h-6 mr-2" />
          LOGO
        </Link>
        <nav>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={toggleDropdown}
              className="flex items-center w-full  px-4 rounded transition duration-200 hover:bg-pink-300 py-5"
            >
              <FaClock className="w-6 h-6 mr-2" />
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
                <Link
                  href="#"
                  className="flex items-center px-4 rounded transition duration-200 hover:bg-pink-100 py-5 "
                >
                  <MdDashboard className="w-6 h-6 mr-2" />
                  Dashboard
                </Link>

                <Link
                  href="#"
                  className="flex items-center px-4 rounded transition duration-200 hover:bg-pink-100 py-5 "
                >
                  <IoMdFingerPrint className="w-6 h-6 mr-2" />
                  Attendence
                </Link>

                <Link
                  href="#"
                  className="flex items-center px-4 rounded transition duration-200 hover:bg-pink-100 py-5 "
                >
                  <SiProducthunt className="w-6 h-6 mr-2" />
                  Productivity
                </Link>
                <Link
                  href="#"
                  className="flex items-center px-4 rounded transition duration-200 hover:bg-pink-100 py-5 "
                >
                  <MdLocalActivity className="w-6 h-6 mr-2" />
                  Activity
                </Link>
                <Link
                  href="#"
                  className="flex items-center px-4 rounded transition duration-200 hover:bg-pink-100 py-5 "
                >
                  <LuMonitorPlay className="w-6 h-6 mr-2" />
                  Monitor
                </Link>
                <Link
                  href="#"
                  className="flex items-center px-4 rounded transition duration-200 hover:bg-pink-100 py-5 "
                >
                  <MdOutlineAccessTimeFilled className="w-6 h-6 mr-2" />
                  Time Claim
                </Link>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={handleMouseEnterOffice}
            onMouseLeave={handleMouseLeaveOffice}
          >
            <button
              onClick={toggleDropdownOffice}
              className="flex items-center w-full  px-4 rounded transition duration-200 hover:bg-pink-300 py-5"
            >
              <LuMonitorPlay className="w-6 h-6 mr-2" />
              Office TV
              <svg
                className={`w-6 h-6 ml-16 ${
                  dropdownOpenOffice ? "rotate-180" : ""
                }`}
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
            {dropdownOpenOffice && (
              <div className="bg-pink-100 rounded mt-1 py-1 space-y-1 px-10 hover:bg-pink-300">
                <Link
                  href="#"
                  className="flex items-center px-4 rounded transition duration-200  py-5"
                >
                  <RiLiveFill className="w-6 h-6 mr-2" />
                  Live Screens
                </Link>
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
                <Link
                  href="#"
                  className="flex items-center px-4 rounded transition duration-200  py-5 hover:bg-pink-100"
                >
                  <ImProfile className="w-6 h-6 mr-2" />
                  Employees
                </Link>
                <Link
                  href="#"
                  className="flex items-center px-4 rounded transition duration-200  py-5 hover:bg-pink-100"
                >
                  <PiTreeStructureDuotone className="w-6 h-6 mr-2" />
                  Org Structure
                </Link>
                <Link
                  href="#"
                  className="flex items-center px-4 rounded transition duration-200  py-5 hover:bg-pink-100"
                >
                  <TbSettingsPause className="w-6 h-6 mr-2" />
                  HR Settings
                </Link>
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
                <Link
                  href="#"
                  className="flex items-center  px-4 rounded transition duration-200 hover:bg-pink-100 py-5 "
                >
                  <VscGithubProject className="w-6 h-6 mr-2" />
                  Projects
                </Link>
                <Link
                  href="#"
                  className="flex items-center   px-4 rounded transition duration-200 hover:bg-pink-100 py-5"
                >
                  <GrTask className="w-6 h-6 mr-2" />
                  Taska
                </Link>
                <Link
                  href="#"
                  className="flex items-center   px-4 rounded transition duration-200  py-5 hover:bg-pink-100"
                >
                  <MdLocalActivity className="w-6 h-6 mr-2" />
                  Activity
                </Link>
                <Link
                  href="#"
                  className="flex items-center   px-4 rounded transition duration-200  py-5 hover:bg-pink-100"
                >
                  <VscWorkspaceTrusted className="w-6 h-6 mr-2" />
                  Role
                </Link>
                <Link
                  href="#"
                  className="flex items-center   px-4 rounded transition duration-200  py-5 hover:bg-pink-100"
                >
                  <VscReport className="w-6 h-6 mr-2" />
                  Reports
                </Link>
                <Link
                  href="#"
                  className="flex items-center   px-4 rounded transition duration-200  py-5 hover:bg-pink-100"
                >
                  <TbSettingsPause className="w-6 h-6 mr-2" />
                  Setting
                </Link>
                <Link
                  href="#"
                  className="flex items-center  px-2 rounded transition duration-200  py-5 hover:bg-pink-100"
                >
                  <FaUsers className="w-6 h-6 mr-2" />
                  Members Allocation
                </Link>
              </div>
            )}
          </div>

          <Link
            href="#"
            className="flex items-center   px-4 rounded transition duration-200 hover:bg-pink-300 py-5"
          >
            <AiOutlineUsergroupDelete className="w-6 h-6 mr-2" />
            Users
          </Link>

          <Link
            href="#"
            className="flex items-center   px-4 rounded transition duration-200 hover:bg-pink-300 py-5"
          >
            <PiMicrosoftTeamsLogoLight className="w-6 h-6 mr-2" />
            Teams
          </Link>

          <Link
            href="#"
            className="flex items-center   px-4 rounded transition duration-200 hover:bg-pink-300 py-5"
          >
            <MdEmail className="w-6 h-6 mr-2" />
            Mails
          </Link>
          <Link
            href="#"
            className="flex items-center   px-4 rounded transition duration-200 hover:bg-pink-300 py-5"
          >
            <CiSettings className="w-6 h-6 mr-2" />
            Settings
          </Link>
          <Link
            href="#"
            className="flex items-center   px-4 rounded transition duration-200 hover:bg-pink-300 py-5"
          >
            <CgProfile className="w-6 h-6 mr-2" />
            Clients
          </Link>
          <Link
            href="#"
            className="flex items-center   px-4 rounded transition duration-200 hover:bg-pink-300 py-5"
          >
            <LuFileSpreadsheet className="w-6 h-6 mr-2" />
            Spreadsheets
          </Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-10 pt-20 pl-04 overflow-y-auto border-solid border  border-red-600 rounded-md bg-pink-100">
        {/* Your main content goes here */}
        <TimeTracke />
        <Employee />
        <EmolpyeeList />
        <SingleEmployee />
        <TopBar />
        <Exports />



        <DashBoard />
      </div>
    </div>
  );
};

export default SideBar;
