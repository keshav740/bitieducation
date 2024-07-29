import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { IoAddCircle } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";
import NewModal from "./insidemodal/NewFormModal";

const FormModal = ({ isVisible, onClose }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const [activeTab, setActiveTab] = useState("details"); // Default tab

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-pink-100 bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-pink-300 p-4 rounded-lg shadow-2xl w-1/2 transform transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "translate-y-full"
        } h-3/4 max-h-screen overflow-hidden`}
      >
        <div className="flex justify-between items-center border-b-2 border-red-500 pb-5">
          <div className="flex items-center space-x-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("details");
              }}
              className={`flex items-center space-x-1 hover:text-green-500 transition duration-300 font-semibold hover:bg-pink-200 rounded-lg px-10 relative overflow-hidden group ${
                activeTab === "details" ? "text-green-500" : ""
              }`}
              aria-label="Details"
            >
              <p className="py-2">Details</p>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("customFields");
              }}
              className={`flex items-center space-x-1 hover:text-green-500 transition duration-300 font-semibold hover:bg-pink-200 rounded-lg px-10 relative overflow-hidden group ${
                activeTab === "customFields" ? "text-green-500" : ""
              }`}
              aria-label="Custom Fields"
            >
              <p className="py-2">Custom Fields</p>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("members");
              }}
              className={`flex items-center space-x-1 hover:text-green-500 transition duration-300 font-semibold hover:bg-pink-200 rounded-lg px-10 relative overflow-hidden group ${
                activeTab === "members" ? "text-green-500" : ""
              }`}
              aria-label="Members"
            >
              <p className="py-2">Members</p>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          <button onClick={onClose} className="text-5xl hover:text-green-500">
            &times;
          </button>
        </div>

        {/* Conditional Rendering Based on Active Tab */}
        <div className="h-full overflow-auto">
          {activeTab === "details" && (
            <>
              <form>
                {/* Details Form */}
                <div className="mt-4">
                  <label htmlFor="projectName" className="block">
                    Project Name
                  </label>
                  <input
                    type="text"
                    id="projectName"
                    className="border rounded-lg p-2 w-full bg-pink-100"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="responsiblePerson" className="block">
                    Select Project Responsible Person
                  </label>
                  <input
                    type="text"
                    id="responsiblePerson"
                    className="border rounded-lg p-2 w-full bg-pink-100"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="startDate" className="block">
                    Started Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    className="border rounded-lg p-2 w-full bg-pink-100"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="endDate" className="block">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    className="border rounded-lg p-2 w-full bg-pink-100"
                    required
                  />
                </div>
              </form>
              <div className="absolute bottom-0 left-0 right-0 flex justify-end space-x-4 p-4">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("customFields");
                  }}
                  type="submit"
                  className="p-2 rounded-lg bg-pink-200 px-4 text-green-500 flex items-center hover:text-pink-200 hover:bg-green-500 transition duration-300"
                >
                  <FaLongArrowAltRight className="pr-2 text-2xl" />
                  Next
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-lg bg-pink-200 px-4 text-red-600 hover:text-pink-200 hover:bg-red-600 transition duration-300"
                >
                  Cancel
                </button>
              </div>
            </>
          )}
          {activeTab === "customFields" && (
            <>
              <form>
                {/* Custom Fields Form */}
                <div className="mt-4 border-2 border-red-500 rounded-lg">
                  <div className="flex justify-between items-center px-10 py-5 border-b-2 border-red-500">
                    <p className="">Add Custom Fields To Project</p>
                    <div>
                      <a href="#" onClick={handleOpenModal}>
                        <p className="px-1 text-xl hover:text-green-500 transition duration-300 font-semibold rounded-lg relative overflow-hidden">
                          <IoMdAddCircle />
                        </p>
                      </a>
                      <NewModal
                        isVisible={isModalVisible}
                        onClose={handleCloseModal}
                      />
                    </div>
                  </div>
                  <div className="text-center pb-80 py-5">No Data Display</div>
                </div>
                {/* Add more fields as needed */}
              </form>
              <div className="absolute bottom-0 left-0 right-0 flex justify-end space-x-4 p-4">
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("details");
                  }}
                  className=" p-2 rounded-lg bg-pink-200 px-4 text-green-500 flex items-center hover:text-pink-200 hover:bg-green-500 transition duration-300"
                >
                  <FaLongArrowAltLeft className="pr-2 text-2xl" />
                  Previous
                </button>
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("members");
                  }}
                  className=" p-2 rounded-lg bg-pink-200 px-4 text-green-500 flex items-center hover:text-pink-200 hover:bg-green-500 transition duration-300"
                >
                  <FaLongArrowAltRight className="pr-2 text-2xl" />
                  Next
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className=" p-2 rounded-lg bg-pink-200 px-4 text-red-600 hover:text-pink-200 hover:bg-red-600 transition duration-300"
                >
                  Cancel
                </button>
              </div>
            </>
          )}
          {activeTab === "members" && (
            <>
              <form>
                {/* Custom Fields Form */}
                <div className="mt-4 border-2 border-red-500 rounded-lg">
                  <div className="text-center pb-80 py-5">
                    Sorry, you don't have permission to add or update the
                    resource, please contact your admin.
                  </div>
                </div>
                {/* Add more fields as needed */}
              </form>
              <div className="absolute bottom-0 left-0 right-0 flex justify-end space-x-4 p-4">
                <button
                  type="submit"
                  className="p-2 rounded-lg bg-pink-200 px-4 text-green-500 flex items-center hover:text-pink-200 hover:bg-green-500 transition duration-300"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-lg bg-pink-200 px-4 text-red-600 hover:text-pink-200 hover:bg-red-600 transition duration-300"
                >
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormModal;
