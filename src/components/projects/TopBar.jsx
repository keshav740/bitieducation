import React from "react";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineAddTask } from "react-icons/md";
import { GrPerformance } from "react-icons/gr";
import { TbUserSearch } from "react-icons/tb";
import { FaToggleOff } from "react-icons/fa6";
import { GrSearchAdvanced } from "react-icons/gr";
import { FaDownload } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { BiUpArrowAlt } from "react-icons/bi";
import FormModal from "./FormModel";
import { useState } from "react";

const TopBar = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      <div className="flex p-2 h-full">
        <div className="w-full p-0 bg-pink-200">
          <div className="flex p-2 font-semibold text-xl space-x-10 border-b-2 border-red-500">
            <a
              href="#"
              className="flex items-center space-x-1 hover:text-green-500 transition duration-300 font-semibold hover:bg-pink-200 rounded-lg px-10 relative overflow-hidden group"
              aria-label="Projects"
            >
              <GoProjectSymlink />
              <p className="py-2">Projects</p>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 hover:text-green-500 transition duration-300 font-semibold hover:bg-pink-200 rounded-lg px-10 relative overflow-hidden group"
              aria-label="Projects"
            >
              <MdOutlineAddTask />
              <p className="py-2">Task</p>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 hover:text-green-500 transition duration-300 font-semibold hover:bg-pink-200 rounded-lg px-10 relative overflow-hidden group"
              aria-label="Projects"
            >
              <GrPerformance />
              <p className="py-2">Activity</p>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <div className="flex justify-between p-2 bg-pink-300 rounded-t-lg px-10 mt-2 border-b-2 border-red-500">
            <div className="flex font-semibold text-lg items-center space-x-1">
              <p className="hover:text-green-500 transition duration-300 font-semibold rounded-lg relative overflow-hidden">
                Projects
              </p>{" "}
              <span className="hover:text-green-500 transition duration-300 font-semibold rounded-lg relative overflow-hidden">
                (0)
              </span>
            </div>
            <div className="flex font-semibold text-lg items-center space-x-1 cursor-pointer">
              <p className="hover:text-green-500 transition duration-300 font-semibold rounded-lg relative overflow-hidden">
                Projects
              </p>{" "}
              <p className="px-1 text-2xl hover:text-green-500 transition duration-300 font-semibold rounded-lg relative overflow-hidden">
                <FaToggleOff />
              </p>
              <div>
                <div className="relative">
                  <div className="flex items-center border border-red-500 rounded-md p-2 text-black-400 bg-pink-100">
                    <TbUserSearch className="h-6 w-6 text-black-400 mr-2" />
                    <input
                      type="text"
                      placeholder="Search projects..."
                      className="outline-none focus:outline-none bg-transparent flex-1 font-semibold"
                    />
                  </div>
                </div>
              </div>
              <a href="#">
                <p className="px-1 text-xl hover:text-green-500 transition duration-300 font-semibold rounded-lg relative overflow-hidden">
                  <GrSearchAdvanced />
                </p>
              </a>
              <a href="#">
                <p className="px-1 text-xl hover:text-green-500 transition duration-300 font-semibold rounded-lg relative overflow-hidden">
                  <FaDownload />
                </p>
              </a>
              <div>
                <a href="#" onClick={handleOpenModal}>
                  <p className="px-1 text-xl hover:text-green-500 transition duration-300 font-semibold rounded-lg relative overflow-hidden">
                    <IoMdAddCircle />
                  </p>
                </a>
                <FormModal
                  isVisible={isModalVisible}
                  onClose={handleCloseModal}
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <table className="min-w-full bg-white border-collapse border border-pink-300">
              <thead className="bg-pink-300 hover:bg-pink-400 transition-colors duration-300">
                <tr>
                  <th className="text-left py-2 px-4 border-b border-pink-300 flex items-center">
                    Project Name{" "}
                    <BiUpArrowAlt className="text-lg text-green-600" />
                  </th>
                  <th className="text-left py-2 px-4 border-b border-pink-300">
                    Project Responsible Person
                  </th>
                  <th className="text-left py-2 px-4 border-b border-pink-300">
                    Created Date Time
                  </th>
                  <th className="text-left py-2 px-4 border-b border-pink-300">
                    Start Date
                  </th>
                  <th className="text-left py-2 px-4 border-b border-pink-300">
                    End Date
                  </th>
                  <th className="text-left py-2 px-4 border-b border-pink-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-pink-50 hover:bg-pink-200 transition-colors duration-300">
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    Keshav
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    Saini
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    +91 7505189143
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    Consultant
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    IT
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    bitieducation
                  </td>
                </tr>
                <tr className="bg-pink-100 hover:bg-pink-300 transition-colors duration-300">
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    Keshav
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    Saini
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    +91 7505189143
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    Consultant
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    IT
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    bitieducation
                  </td>
                </tr>
                <tr className="bg-pink-50 hover:bg-pink-200 transition-colors duration-300">
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    Keshav
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    Saini
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    +91 7505189143
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    Consultant
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    IT
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    bitieducation
                  </td>
                </tr>
                <tr className="bg-pink-100 hover:bg-pink-300 transition-colors duration-300">
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    Keshav
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    Saini
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    +91 7505189143
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    Consultant
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    IT
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    bitieducation
                  </td>
                </tr>
                <tr className="bg-pink-50 hover:bg-pink-200 transition-colors duration-300">
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    Keshav
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    Saini
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    +91 7505189143
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    Consultant
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    IT
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    bitieducation
                  </td>
                </tr>
                <tr className="bg-pink-100 hover:bg-pink-300 transition-colors duration-300">
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    Keshav
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    Saini
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    +91 7505189143
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    Consultant
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    IT
                  </td>
                  <td className="text-left py-2 px-4 border-b border-pink-300">
                    bitieducation
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
            <div className="p-5 m-2 border border-red-500">
              <p>No Data Display</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
