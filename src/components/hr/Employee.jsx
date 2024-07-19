import React from "react";
import { TbUserSearch } from "react-icons/tb";
import { IoList } from "react-icons/io5";
import { MdAirplanemodeInactive } from "react-icons/md";
import { ImProfile } from "react-icons/im";

const Employee = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row p-2 h-full">
        <div className="w-full md:w-1/3 md:p-4 p-0 bg-pink-200">
          <div className="flex justify-between border border-red-500 p-2 rounded-lg">
            <a
              href="#"
              className="hover:bg-pink-100 hover:text-green-500 transition duration-300 rounded-lg p-2 font-semibold"
            >
              Department
            </a>
            <a
              href="#"
              className="hover:bg-pink-100 hover:text-green-500 transition duration-300 rounded-lg p-2 font-semibold"
            >
              Managers
            </a>
            <a
              href="#"
              className="hover:bg-pink-100 hover:text-green-500 transition duration-300 rounded-lg p-2 font-semibold"
            >
              Locations
            </a>
          </div>

          <div className="flex border border-red-500 p-2 mt-2 bg-pink-100 rounded-lg">
            <div className="flex items-center p-2 text-black-400 justify-between">
              <input
                type="text"
                placeholder="Search...."
                className="outline-none focus:outline-none bg-transparent flex-1 font-semibold"
              />
              <TbUserSearch className="h-6 w-6 text-black-400" />
            </div>
          </div>
          <div className="hover:bg-pink-200 transtion duration-300 border border-red-500 p-2 mt-2 bg-pink-100 rounded-lg">
            <a href="#" className="flex justify-between font-semibold">
              <p>bitieducation</p>
              <span></span>
            </a>
          </div>

          <div className="hover:bg-pink-200 transtion duration-300 border border-red-500 p-2 mt-2 bg-pink-100 rounded-lg">
            <div className="items-center p-2 text-black-400">
              <a href="#" className="flex justify-between font-semibold">
                <p>IT</p>
                <p>(1)</p>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-7/10 p-4 bg-pink-300">
          <div className="flex flex-col md:flex-row md:justify-between mb-5">
            <a
              href="#"
              className="bg-pink-400 hover:text-green-500 transition duration-300 font-semibold hover:bg-pink-200 rounded-lg font px-10 relative overflow-hidden group"
            >
              <div className="text-center p-2">
                <div className="flex items-center space-x-1">
                  <ImProfile className="text-xl" />
                  <p>Employee Directory</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>
            </a>
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
              <div>
                <div className="relative">
                  <div className="flex items-center border border-red-500 rounded-md p-2 text-black-400 bg-pink-100">
                    <TbUserSearch className="h-6 w-6 text-black-400 mr-2" />
                    <input
                      type="text"
                      placeholder="Search For Employees"
                      className="outline-none focus:outline-none bg-transparent flex-1 font-semibold"
                    />
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="hover:text-green-500 transition duration-300 font-semibold hover:bg-pink-200 rounded-lg"
              >
                <div className="text-center p-2">
                  <div className="flex items-center space-x-1">
                    <IoList className="text-xl" /> <p>List View</p>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="hover:text-green-500 transition duration-300 font-semibold hover:bg-pink-200 rounded-lg"
              >
                <div className="text-center p-2">
                  <div className="flex items-center space-x-1">
                    <MdAirplanemodeInactive className="text-xl" />{" "}
                    <p>Show Inactive Employees</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 p-2 bg-pink-400 cursor-pointer overflow-hidden">
              <div className="p-4 bg-pink-100 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-red-500">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold ">Keshav Saini</h2>
                    <p className="text-gray-600 uppercase">Consultant</p>
                    <div className="py-4">
                      <div className="flex">
                        <span>Department:</span>
                        <p className="text-gray-600 px-2">IT</p>
                      </div>
                      <div className="flex">
                        <span>Location:</span>
                        <p className="text-gray-600 px-2">bitieducation</p>
                      </div>
                      <div className="flex">
                        <span>Reports To:</span>
                        <p className="text-gray-600 px-2">Jitender Yadav</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-2 bg-pink-400 cursor-pointer overflow-hidden">
              <div className="p-4 bg-pink-100 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-red-500">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold">Keshav Saini</h2>
                    <p className="text-gray-600 uppercase">Consultant</p>
                    <div className="py-4">
                      <div className="flex">
                        <span>Department:</span>
                        <p className="text-gray-600 px-2">IT</p>
                      </div>
                      <div className="flex">
                        <span>Location:</span>
                        <p className="text-gray-600 px-2">bitieducation</p>
                      </div>
                      <div className="flex">
                        <span>Reports To:</span>
                        <p className="text-gray-600 px-2">Jitender Yadav</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employee;
