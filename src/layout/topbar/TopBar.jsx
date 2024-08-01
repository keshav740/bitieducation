import React, { useState, useEffect, useRef } from "react";
import { FaFileInvoice } from "react-icons/fa";
import { RiUserSettingsLine } from "react-icons/ri";
import { AiFillCaretDown } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { LuDownloadCloud } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { LuArrowDownLeftFromCircle } from "react-icons/lu";
import { SiWorkplace } from "react-icons/si";
import DownloadTimeChampModal from "../../components/modal/DownloadTimeChampModal";
import EmailVerify from "../../components/modal/EmailVerify";
import ReferTimeChamp from "../../components/modal/ReferTimeChamp";
import SetUpOrgName from "../../components/modal/SetUpOrgName";
import SetUpTeam from "../../components/modal/SetUpTeam";
import SetUpTeamMembers from "../../components/modal/SetUpTeamMembers";
import SetUpTrackerSetting from "../../components/modal/SetUpTrackerSetting";
import { AiOutlineAudit } from "react-icons/ai";
import LoginAudit from "../../components/modal/LoginAudit";

const TopBar = () => {
  const [dropdownOpen1, setDropdownOpen1] = useState(false); // Manage the dropdown for "Set up Your Account"
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false); // Manage the dropdown for "Menu 2"
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModalEmail = () => setIsOpenModal(true);
  const handleCloseModalEmail = () => setIsOpenModal(false);

  const [isOpenModalRefer, setIsOpenModalRefer] = useState(false);
  const handleOpenModalRefer = () => setIsOpenModalRefer(true);
  const handleCloseModalRefer = () => setIsOpenModalRefer(false);

  const [isModalOpenSetup, setIsModalOpenSetup] = useState(false);
  const handleOpenModalSetup = () => setIsModalOpenSetup(true);
  const handleCloseModalSetup = () => setIsModalOpenSetup(false);

  const [isOpenModalLoginAudit, setIsOpenModalLoginAudit] = useState(false);
  const handleOpenModalLoginAudit = () => setIsOpenModalLoginAudit(true);
  const handleCloseModalLoginAudit = () => setIsOpenModalLoginAudit(false);

  const [isModalOpenSetupTeam, setIsModalOpenSetupTeam] = useState(false);
  const handleOpenModalSetupTeam = () => setIsModalOpenSetupTeam(true);
  const handleCloseModalSetupTeam = () => setIsModalOpenSetupTeam(false);

  const [isModalOpenSetupTeamMembers, setIsModalOpenSetupTeamMembers] =
    useState(false);

  const handleOpenModalSetupTeamMembers = () =>
    setIsModalOpenSetupTeamMembers(true);
  const handleCloseModalSetupTeamMembers = () =>
    setIsModalOpenSetupTeamMembers(false);

  const [isModalOpenSetupTrackerSetting, setIsModalOpenSetupTrackerSetting] =
    useState(false);

  const handleOpenModalSetupTrackerSetting = () =>
    setIsModalOpenSetupTrackerSetting(true);
  const handleCloseModalSetupTrackerSetting = () =>
    setIsModalOpenSetupTrackerSetting(false);

  // Close dropdowns if click outside of them
  const handleClickOutside = (event) => {
    if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
      setDropdownOpen1(false);
    }
    if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
      setDropdownOpen2(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown1 = () => {
    setDropdownOpen1(!dropdownOpen1);
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2);
  };

  return (
    <div className="bg-pink-200 fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-4 border-b border-red-600 py-11">
      <div className="text-2xl">Logo</div>
      <div className="flex space-x-2 items-center">
        {/* Menu Links */}
        <a
          href="#"
          className="flex items-center py-2 px-4 rounded transition duration-200 hover:bg-pink-300 bg-pink-100 border-l-4 border-r-4 border-pink-400"
        >
          Free Demo
        </a>
        <a
          href="#"
          className="flex items-center py-2 px-4 rounded transition duration-200 hover:bg-pink-300 bg-pink-100 border-l-4 border-r-4 border-pink-400"
        >
          <LuDownloadCloud className="mr-2" /> Agent
        </a>
        <div className="relative" ref={dropdownRef1}>
          <a
            href="#"
            onClick={toggleDropdown1}
            className="flex items-center py-2 px-4 rounded transition duration-200 hover:bg-pink-300 bg-pink-100 border-l-4 border-r-4 border-pink-400"
          >
            <RiUserSettingsLine className="mr-2" /> Set up Your Account : 30%{" "}
            <AiFillCaretDown className="ml-2" />
          </a>
          {dropdownOpen1 && (
            <div className="absolute left-0 mt-10 bg-pink-200 rounded-lg py-1 w-64 shadow-2xl shadow-pink-500/50">
              <div>
                <a
                  href="#"
                  className="flex items-center py-2 px-4 text-sm hover:bg-pink-100 m-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpenModal();
                  }}
                >
                  <input
                    type="checkbox"
                    id="link1-checkbox"
                    className="mr-2 accent-pink-600"
                  />
                  <label htmlFor="link1-checkbox" className="flex-1">
                    Download Time Champ
                  </label>
                </a>

                <DownloadTimeChampModal
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                />
              </div>

              <div>
                <a
                  href="#"
                  className="flex items-center py-2 px-4 text-sm hover:bg-pink-100 m-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpenModalSetup();
                  }}
                >
                  <input
                    type="checkbox"
                    id="link1-checkbox"
                    className="mr-2 accent-pink-600"
                  />
                  <label htmlFor="link1-checkbox" className="flex-1">
                    Setup Your Organization Name
                  </label>
                </a>

                <SetUpOrgName
                  isOpen={isModalOpenSetup}
                  onClose={handleCloseModalSetup}
                />
              </div>

              <div>
                <a
                  href="#"
                  className="flex items-center py-2 px-4 text-sm hover:bg-pink-100 m-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpenModalSetupTeam();
                  }}
                >
                  <input
                    type="checkbox"
                    id="link1-checkbox"
                    className="mr-2 accent-pink-600"
                  />
                  <label htmlFor="link1-checkbox" className="flex-1">
                    Setup Your Teams
                  </label>
                </a>

                <SetUpTeam
                  isOpen={isModalOpenSetupTeam}
                  onClose={handleCloseModalSetupTeam}
                />
              </div>

              <div>
                <a
                  href="#"
                  className="flex items-center py-2 px-4 text-sm hover:bg-pink-100 m-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpenModalSetupTeamMembers();
                  }}
                >
                  <input
                    type="checkbox"
                    id="link1-checkbox"
                    className="mr-2 accent-pink-600"
                  />
                  <label htmlFor="link1-checkbox" className="flex-1">
                    Setup Your Team Members
                  </label>
                </a>

                <SetUpTeamMembers
                  isOpen={isModalOpenSetupTeamMembers}
                  onClose={handleCloseModalSetupTeamMembers}
                />
              </div>

              <div>
                <a
                  href="#"
                  className="flex items-center py-2 px-4 text-sm hover:bg-pink-100 m-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpenModalSetupTrackerSetting();
                  }}
                >
                  <input
                    type="checkbox"
                    id="link1-checkbox"
                    className="mr-2 accent-pink-600"
                  />
                  <label htmlFor="link1-checkbox" className="flex-1">
                    Setup Your Tracker Setting
                  </label>
                </a>

                <SetUpTrackerSetting
                  isOpen={isModalOpenSetupTrackerSetting}
                  onClose={handleCloseModalSetupTrackerSetting}
                />
              </div>

              <div>
                <a
                  href="#"
                  className="flex items-center py-2 px-4 text-sm hover:bg-pink-100 m-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpenModalEmail();
                  }}
                >
                  <input
                    type="checkbox"
                    id="link1-checkbox"
                    className="mr-2 accent-pink-600"
                  />
                  <label htmlFor="link1-checkbox" className="flex-1">
                    Email Verification
                  </label>
                </a>

                <EmailVerify
                  isOpen={isOpenModal}
                  onClose={handleCloseModalEmail}
                />
              </div>

              <div>
                <a
                  href="#"
                  className="flex items-center py-2 px-4 text-sm hover:bg-pink-100 m-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpenModalRefer();
                  }}
                >
                  <input
                    type="checkbox"
                    id="link1-checkbox"
                    className="mr-2 accent-pink-600"
                  />
                  <label htmlFor="link1-checkbox" className="flex-1">
                    Refer Time Champ to your Friends....
                  </label>
                </a>

                <ReferTimeChamp
                  isOpen={isOpenModalRefer}
                  onClose={handleCloseModalRefer}
                />
              </div>
            </div>
          )}
        </div>

        <div
          className="relative inline-block"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <a
            href="#"
            className="flex items-center py-2 px-4 rounded transition duration-200 hover:bg-pink-300 bg-pink-100 border-l-4 border-r-4 border-pink-400"
          >
            <FaFileInvoice className="text-2xl" />
          </a>
          {showTooltip && (
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-5 w-24 text-sm bg-pink-300 rounded-lg shadow-lg p-2 text-center">
              <SiWorkplace className="ml-8" />
              My Work
            </div>
          )}
        </div>

        {/* Dropdown Menu 2 */}
        <div className="relative" ref={dropdownRef2}>
          <button
            onClick={toggleDropdown2}
            className="flex items-center py-2 px-4 rounded transition duration-200 hover:bg-pink-300 bg-pink-100 border-l-4 border-r-4 border-pink-400"
          >
            <CgProfile className="text-5xl mr-2 text-pink-600 bg-pink-200 rounded-full" />{" "}
            <div className="flex flex-col items-start">
              <p className="text-left">Keshav</p>
              <p className="text-left">keshavsaini192@gmail.com</p>
            </div>
            <svg
              className={`w-4 h-4 ml-1 transform ${
                dropdownOpen2 ? "rotate-180" : "rotate-0"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              transition="transform 0.3s ease"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.832.445l4.911 7a1 1 0 01-.832 1.555H5.089a1 1 0 01-.832-1.555l4.911-7A1 1 0 0110 3zM5.268 10h9.465L10 5.236 5.268 10zm9.465 1H5.268L10 14.764 14.733 11z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {dropdownOpen2 && (
            <div className="absolute right-0 mt-7 bg-pink-200 rounded-lg py-1 w-64 shadow-2xl shadow-pink-500/50">
              <a
                href="#"
                className="flex items-center block py-2 px-4 text-lg hover:bg-pink-100 m-2"
                onClick={() => setDropdownOpen2(false)}
              >
                <FaRegUser className="mr-2" /> Profile
              </a>
              <a
                href="#"
                className="flex items-center block py-2 px-4  hover:bg-pink-100 text-lg m-2"
                onClick={() => setDropdownOpen2(false)}
              >
                <LuDownloadCloud className="mr-2" /> Exports
              </a>

              <div>
                <a
                  href="#"
                  className="flex items-center block py-2 px-4  hover:bg-pink-100 text-lg m-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpenModalLoginAudit();
                  }}
                >
                  <AiOutlineAudit className="mr-2" /> Login Audit
                </a>

                <LoginAudit
                  isOpen={isOpenModalLoginAudit}
                  onClose={handleCloseModalLoginAudit}
                />
              </div>
              <a
                href="#"
                className="flex items-center block py-2 px-4  hover:bg-pink-100 text-lg m-2"
                onClick={() => setDropdownOpen2(false)}
              >
                <LiaSignOutAltSolid className="mr-2" /> Sign Out
              </a>
              <a
                href="#"
                className="flex items-center block py-2 px-4  hover:bg-pink-100 text-lg m-2 border-t border-pink-500"
                onClick={() => setDropdownOpen2(false)}
              >
                <LuArrowDownLeftFromCircle className="mr-2" /> Version
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
