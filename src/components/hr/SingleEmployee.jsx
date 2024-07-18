import React from "react";
import { MdContentCopy } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { AiOutlineAntDesign } from "react-icons/ai";
import { GrDocumentWord } from "react-icons/gr";
import { CgMoreVerticalO } from "react-icons/cg";

const SingleEmployee = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row p-2 h-full">
        <div className="w-full md:w-1/3 md:p-4 p-0 bg-pink-200">
          <div className="flex  justify-center  border-b-4 border-red-500 p-2">
            <div className="w-150 h-150 rounded-full overflow-hidden border-2 border-red-500">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="hover:bg-pink-200 transtion duration-300 border border-red-500 p-2 mt-2 bg-pink-100 rounded-lg text-black-40">
            <div className="p-2 text-black-400">
              <p className=" font-semibold text-xl">Keshav Saini</p>
              <div className="space-y-2">
                <div className="flex items-center ">
                  <p>keshav@bitieducation.com</p>
                  <p className="mx-1">:</p>
                  <MdContentCopy  className="cursor-pointer"/>
                </div>
                <div className="flex items-center">
                  <p>bitieducation.com</p>
                  <p className="mx-1">:</p>
                  <FaLocationDot  className="cursor-pointer"/>
                </div>
                <div className="flex items-center">
                  <p>Job Title</p>
                  <p className="mx-1">:</p>
                  <p>Consultant</p>
                </div>
                <div className="flex items-center">
                  <p>Department</p>
                  <p className="mx-1">:</p>
                  <p>IT</p>
                </div>
                <div className="flex items-center">
                  <p>Business Unit</p>
                  <p className="mx-1">:</p>
                  <p>-Not Set-</p>
                </div>
                <div className="flex items-center">
                  <p>Reports To</p>
                  <p className="mx-1">:</p>
                  <p>JitendraYadav</p>
                </div>
                <div className="flex items-center">
                  <p>Emp Id</p>
                  <p className="mx-1">:</p>
                  <p>keshavsaini</p>
                </div>
              </div>
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
                  <CgMoreVerticalO className="text-xl" />
                  <p>About</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>
            </a>
            <a
              href="#"
              className="bg-pink-400 hover:text-green-500 transition duration-300 font-semibold hover:bg-pink-200 rounded-lg font px-10 relative overflow-hidden group"
            >
              <div className="text-center p-2">
                <div className="flex items-center space-x-1">
                  <CgProfile className="text-xl" />
                  <p>Profile</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>
            </a>
            <a
              href="#"
              className="bg-pink-400 hover:text-green-500 transition duration-300 font-semibold hover:bg-pink-200 rounded-lg font px-10 relative overflow-hidden group"
            >
              <div className="text-center p-2">
                <div className="flex items-center space-x-1">
                  <AiOutlineAntDesign className="text-xl" />
                  <p>Job</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>
            </a>
            <a
              href="#"
              className="bg-pink-400 hover:text-green-500 transition duration-300 font-semibold hover:bg-pink-200 rounded-lg font px-10 relative overflow-hidden group"
            >
              <div className="text-center p-2">
                <div className="flex items-center space-x-1">
                  <GrDocumentWord className="text-xl" />
                  <p>Documents</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>
            </a>
          </div>
          <div className="bg-pink-200 p-2 border border-red-500 rounded-lg">
            <h2 className="text-xl font-semibold py-2">Primary Details</h2>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 p-2">
                <div className="p-4 rounded-lg ">
                  <div className="flex">
                    <div className="">
                      <h2 className="text-xl">First Name</h2>
                      <p className="text-gray-600">Keshav</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-2">
                <div className="p-4 rounded-lg ">
                  <div className="flex">
                    <div className="">
                      <h2 className="text-xl">Last Name</h2>
                      <p className="text-gray-600">Saini</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3 p-2">
                <div className="p-4 rounded-lg ">
                  <div className="flex">
                    <div className="">
                      <h2 className="text-xl">Marital Status</h2>
                      <p className="text-gray-600">- Not Set-</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 p-2">
                <div className="p-4 rounded-lg ">
                  <div className="flex">
                    <div className="">
                      <h2 className="text-xl">Gender</h2>
                      <p className="text-gray-600">Male</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-2">
                <div className="p-4 rounded-lg ">
                  <div className="flex">
                    <div className="">
                      <h2 className="text-xl">Date Of Birth</h2>
                      <p className="text-gray-600">19-02-2004</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3 p-2">
                <div className="p-4 rounded-lg ">
                  <div className="flex">
                    <div className="">
                      <h2 className="text-xl">PWD</h2>
                      <p className="text-gray-600">- Not Set -</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-pink-200 mt-2 p-2 border border-red-500 rounded-lg h-1/2 text-black font-semibold text-xl">
            Reporting Team
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleEmployee;
