import React, { useState } from "react";
import { MdContentCopy, MdTimeline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { CgProfile, CgMoreVerticalO } from "react-icons/cg";
import { AiOutlineAntDesign } from "react-icons/ai";
import { GrDocumentWord } from "react-icons/gr";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaHandshakeSimple } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";

const SingleEmployee = () => {
  const [activeSection, setActiveSection] = useState("primaryDetails");

  const renderContent = () => {
    switch (activeSection) {
      case "primaryDetails":
        return (
          <>
            <div className="bg-pink-200 p-2 border border-red-500 rounded-lg">
              <h2 className="text-xl font-semibold py-2">Primagry Details</h2>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 p-2">
                  <div className="p-4 rounded-lg">
                    <div className="flex">
                      <div className="">
                        <h2 className="text-xl hover:text-pink-500">
                          Job Title
                        </h2>
                        <p className="text-gray-600">Consultant</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 p-2">
                  <div className="p-4 rounded-lg">
                    <div className="flex">
                      <div className="">
                        <h2 className="text-xl hover:text-pink-500">
                          Department
                        </h2>
                        <p className="text-gray-600">IT</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 p-2">
                  <div className="p-4 rounded-lg">
                    <div className="flex">
                      <div className="">
                        <h2 className="text-xl hover:text-pink-500">
                          Business Unit
                        </h2>
                        <p className="text-gray-600">- Not Set -</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 p-2">
                  <div className="p-4 rounded-lg">
                    <div className="flex">
                      <div className="">
                        <h2 className="text-xl hover:text-pink-500">
                          Reports To
                        </h2>
                        <p className="text-gray-600">Jitendra Yadav</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 p-2">
                  <div className="p-4 rounded-lg">
                    <div className="flex">
                      <div className="">
                        <h2 className="text-xl hover:text-pink-500">Emp Id</h2>
                        <p className="text-gray-600">keshavsaini</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-pink-200 mt-2 p-2 border border-red-500 rounded-lg h-1/2 text-black font-semibold text-xl">
              Reporting Team
            </div>
          </>
        );
      case "about":
        return (
          <>
            <div className="bg-pink-200 p-2 border border-red-500 rounded-lg">
              <h2 className="text-xl font-semibold py-2">Job Details</h2>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 p-2">
                  <div className="p-4 rounded-lg">
                    <div className="flex">
                      <div className="">
                        <h2 className="text-xl hover:text-pink-500">
                          Job Title
                        </h2>
                        <p className="text-gray-600">Consultant</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 p-2">
                  <div className="p-4 rounded-lg">
                    <div className="flex">
                      <div className="">
                        <h2 className="text-xl hover:text-pink-500">
                          Department
                        </h2>
                        <p className="text-gray-600">IT</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 p-2">
                  <div className="p-4 rounded-lg">
                    <div className="flex">
                      <div className="">
                        <h2 className="text-xl hover:text-pink-500">
                          Business Unit
                        </h2>
                        <p className="text-gray-600">- Not Set -</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 p-2">
                  <div className="p-4 rounded-lg">
                    <div className="flex">
                      <div className="">
                        <h2 className="text-xl hover:text-pink-500">
                          Reports To
                        </h2>
                        <p className="text-gray-600">Jitendra Yadav</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 p-2">
                  <div className="p-4 rounded-lg">
                    <div className="flex">
                      <div className="">
                        <h2 className="text-xl hover:text-pink-500">Emp Id</h2>
                        <p className="text-gray-600">keshavsaini</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-pink-200 mt-2 p-2 border border-red-500 rounded-lg h-1/2 text-black font-semibold text-xl">
              Reporting Team
            </div>
          </>
        );
      case "profile":
        return (
          <div className="p-2">
            <div className="bg-pink-200 rounded-lg">
              <div className="mx-auto p-4 ">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                    <div className="bg-pink-200 border border-red-500 h-128 rounded-lg pb-10">
                      <h1 className="px-10 p-4 font-bold text-xl">
                        Primary Details
                      </h1>
                      <div className="flex justify-around">
                        <div>
                          <p className="font-semibold text-lg hover:text-pink-500">
                            First Name
                          </p>
                          <p className="text-lg text-gray-600">Keshav</p>
                        </div>
                        <div>
                          <p className="font-semibold text-lg hover:text-pink-500">
                            Last Name
                          </p>
                          <p className="text-lg text-gray-600">Saini</p>
                        </div>
                        <div>
                          <p className="font-semibold text-lg hover:text-pink-500">
                            Display Name
                          </p>
                          <p className="text-lg text-gray-600">Keshav Saini</p>
                        </div>
                      </div>
                      <div className="flex justify-around pt-5">
                        <div>
                          <p className="font-semibold text-lg hover:text-pink-500">
                            Gender
                          </p>
                          <p className="text-lg text-gray-600">Male</p>
                        </div>
                        <div>
                          <p className="font-semibold text-lg hover:text-pink-500">
                            Date Of Birth
                          </p>
                          <p className="text-lg text-gray-600">-Not Set-</p>
                        </div>
                        <div>
                          <p className="font-semibold text-lg hover:text-pink-500">
                            Marital Status
                          </p>
                          <p className="text-lg text-gray-600">-Not Set-</p>
                        </div>
                      </div>
                      <div className="flex justify-around pt-5">
                        <div>
                          <p className="font-semibold text-lg hover:text-pink-500">
                            PWD
                          </p>
                          <p className="text-lg text-gray-600">-Not Set-</p>
                        </div>
                        <div>
                          <p className="font-semibold text-lg hover:text-pink-500">
                            Blood Group
                          </p>
                          <p className="text-lg text-gray-600">-Not Set-</p>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                    <div className="bg-pink-200 border border-red-500 h-128 rounded-lg pb-10">
                      <h1 className="px-10 p-4 font-bold text-xl">
                        Contact Details
                      </h1>
                      <div className="flex justify-around">
                        <div>
                          <p className="font-semibold text-lg hover:text-pink-500">
                            Work Mail
                          </p>
                          <p className="text-lg text-gray-600">-Not Set-</p>
                        </div>
                        <div>
                          <p className="font-semibold text-lg hover:text-pink-500">
                            Personal Mail
                          </p>
                          <p className="text-lg text-gray-600">Saini</p>
                        </div>
                        <div>
                          <p className="font-semibold text-lg hover:text-pink-500">
                            Display Name
                          </p>
                          <p className="text-lg text-gray-600">Keshav Saini</p>
                        </div>
                      </div>
                      <div className="flex justify-around pt-5">
                        <div>
                          <p className="font-semibold text-lg hover:text-pink-500">
                            Gender
                          </p>
                          <p className="text-lg text-gray-600">Male</p>
                        </div>
                        <div>
                          <p className="font-semibold text-lg hover:text-pink-500">
                            Date Of Birth
                          </p>
                          <p className="text-lg text-gray-600">-Not Set-</p>
                        </div>
                        <div>
                          <p className="font-semibold text-lg hover:text-pink-500">
                            Marital Status
                          </p>
                          <p className="text-lg text-gray-600">-Not Set-</p>
                        </div>
                      </div>
                      <div className="flex justify-around pt-5">
                        <div>
                          <p className="font-semibold text-lg hover:text-pink-500">
                            PWD
                          </p>
                          <p className="text-lg text-gray-600">-Not Set-</p>
                        </div>
                        <div>
                          <p className="font-semibold text-lg hover:text-pink-500">
                            Blood Group
                          </p>
                          <p className="text-lg text-gray-600">-Not Set-</p>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto p-4 ">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                    <div className="bg-pink-200 border border-red-500 h-128 rounded-lg pb-10">
                      <h1 className="px-10 p-4 font-bold text-xl ">Address</h1>
                      <div className="flex justify-around pt-5">
                        <div>
                          <p className="font-semibold text-lg hover:text-pink-500">
                            Current Address
                          </p>
                          <p className="text-lg text-gray-600">Keshav</p>
                        </div>
                        <div>
                          <p className="font-semibold text-lg hover:text-pink-500">
                            Permanent Address
                          </p>
                          <p className="text-lg text-gray-600">Keshav</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                    <div className="bg-pink-200 border border-red-500 h-128 rounded-lg pb-10">
                      <h1 className="px-10 p-4 font-bold text-xl">Relations</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "job":
        return (
          <>
            <div className="p-2">
              <div className="bg-pink-200 rounded-lg">
                <div className="mx-auto p-4 ">
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 mb-4 md:mb-0">
                      <div className="bg-pink-200 border border-red-500 h-128 rounded-lg pb-10">
                        <h1 className="px-10 p-4 font-bold text-xl">
                          Job Details
                        </h1>
                        <div className="flex justify-around">
                          <div>
                            <p className="font-semibold text-lg hover:text-pink-500">
                              Employee Id
                            </p>
                            <p className="text-lg text-gray-600">keshavsaini</p>
                          </div>
                          <div>
                            <p className="font-semibold text-lg hover:text-pink-500">
                              Date Of Joining
                            </p>
                            <p className="text-lg text-gray-600">16 Jul 2024</p>
                          </div>
                          <div>
                            <p className="font-semibold text-lg hover:text-pink-500">
                              In Probation?
                            </p>
                            <p className="text-lg text-gray-600">-Not Set-</p>
                          </div>
                        </div>
                        <div className="flex justify-around pt-5">
                          <div>
                            <p className="font-semibold text-lg hover:text-pink-500">
                              Job Title
                            </p>
                            <p className="text-lg text-gray-600">Consultant</p>
                          </div>
                          <div>
                            <p className="font-semibold text-lg hover:text-pink-500">
                              Date Of Birth
                            </p>
                            <p className="text-lg text-gray-600">-Not Set-</p>
                          </div>
                          <div>
                            <p className="font-semibold text-lg hover:text-pink-500">
                              Marital Status
                            </p>
                            <p className="text-lg text-gray-600">-Not Set-</p>
                          </div>
                        </div>
                        <div className="flex justify-around pt-5">
                          <div>
                            <p className="font-semibold text-lg hover:text-pink-500">
                              PWD
                            </p>
                            <p className="text-lg text-gray-600">-Not Set-</p>
                          </div>
                          <div>
                            <p className="font-semibold text-lg hover:text-pink-500">
                              Blood Group
                            </p>
                            <p className="text-lg text-gray-600">-Not Set-</p>
                          </div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-auto p-4 ">
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 mb-4 md:mb-0">
                      <div className="bg-pink-200 border border-red-500 h-128 rounded-lg pb-10">
                        <h1 className="px-10 p-4 font-bold text-xl">
                          Organization
                        </h1>
                        <div className="flex justify-around">
                          <div>
                            <p className="font-semibold text-lg hover:text-pink-500">
                              Business Unit
                            </p>
                            <p className="text-lg text-gray-600">keshavsaini</p>
                          </div>
                          <div>
                            <p className="font-semibold text-lg hover:text-pink-500">
                              Practice
                            </p>
                            <p className="text-lg text-gray-600">16 Jul 2024</p>
                          </div>
                          <div>
                            <p className="font-semibold text-lg hover:text-pink-500">
                              Department
                            </p>
                            <p className="text-lg text-gray-600">IT</p>
                          </div>
                        </div>
                        <div className="flex justify-around pt-5">
                          <div>
                            <p className="font-semibold text-lg hover:text-pink-500">
                              Location
                            </p>
                            <p className="text-lg text-gray-600">
                              bitieducation
                            </p>
                          </div>
                          <div>
                            <p className="font-semibold text-lg hover:text-pink-500">
                              Legal Entity
                            </p>
                            <p className="text-lg text-gray-600">
                              bitieducation
                            </p>
                          </div>
                          <div>
                            <p className="font-semibold text-lg hover:text-pink-500">
                              Direct Reports
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-around pt-5">
                          <div>
                            <p className="font-semibold text-lg hover:text-pink-500">
                              Reports To
                            </p>
                            <div className="flex items-center mt-2 space-x-2">
                              <div className="w-10 h-10 mt-2 rounded-full overflow-hidden border-2 border-red-500">
                                <img
                                  src="https://via.placeholder.com/150"
                                  alt="Profile"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <p className="text-gray-600 text-lg">
                                Jitendra Yadav
                              </p>
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



        case "documents":
          return (
            <>
      <div className="flex flex-col md:flex-row p-2 h-160">
        <div className="w-full md:w-1/3 md:p-4 p-0 bg-pink-200">
        <div className="hover:bg-pink-200 transtion duration-300 border border-red-500 p-2 mt-2 bg-pink-100 rounded-lg">
            <a href="#" className="flex justify-between font-semibold">
              <p>Degree & Certification</p>
              <span></span>
            </a>
          </div>
          <div className="hover:bg-pink-200 transtion duration-300 border border-red-500 p-2 mt-2 bg-pink-100 rounded-lg">
            <a href="#" className="flex justify-between font-semibold">
              <p>Previous Experience</p>
              <span></span>
            </a>
          </div>
          <div className="hover:bg-pink-200 transtion duration-300 border border-red-500 p-2 mt-2 bg-pink-100 rounded-lg">
            <a href="#" className="flex justify-between font-semibold">
            <p>Identity Docs</p>
            <span></span>
            </a>
          </div>
        </div>
        <div className="w-full md:w-7/10 p-4 bg-pink-300">
          <div className="flex flex-col w-full md:flex-row md:justify-between mb-5">
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
  
  
          case "timeline":
            return (
<>
      <div className="p-2">
        <div className="min-h-[50vh] bg-pink-200 p-2 w-full flex flex-col items-center rounded-lg shadow-lg border border-red-500">
          <div className="flex mb-4 mt-10 items-center space-x-5">
            <div className="flex flex-col items-center ">
              <div className="flex items-center relative">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center">
                  <FaHandshakeSimple className="text-white w-8 h-8" />
                </div>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-1 h-16 bg-pink-500"></div>
              </div>
            </div>
            <div className="">
              <h5 className="font-bold text-lg">
              Joined in bitieducation
              </h5>
              <p className="text-gray-800">17 Jul 2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
            );
  


  



      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row p-2 h-full">
        <div className="w-full md:w-1/3 md:p-4 p-0 bg-pink-200">
          <div className="flex justify-center border-b-4 border-red-500 p-2">
            <div className="w-36 h-36 rounded-full overflow-hidden mb-5 border-2 border-red-500">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile of Keshav Saini"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="hover:bg-pink-200 transition duration-300 border mt-10 border-red-500 p-2 bg-pink-100 rounded-lg text-black-40">
            <div className="p-2 text-black-400">
              <p className="font-semibold text-xl">Keshav Saini</p>
              <div className="space-y-2">
                {[
                  {
                    label: "keshav@bitieducation.com",
                    icon: <MdContentCopy />,
                  },
                  { label: "bitieducation.com", icon: <FaLocationDot /> },
                  { label: "Job Title: Consultant" },
                  { label: "Department: IT" },
                  { label: "Business Unit: -Not Set-" },
                  { label: "Reports To: Jitendra Yadav" },
                  { label: "Emp Id: keshavsaini" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <p>{item.label}</p>
                    {item.icon && <p className="mx-1">:</p>}
                    {item.icon && (
                      <div className="cursor-pointer">{item.icon}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-7/10 p-4 bg-pink-300">
          <div className="flex flex-col md:flex-row md:justify-between  mb-5">
            {[
              { label: "About", icon: <CgMoreVerticalO />, section: "about" },
              { label: "Profile", icon: <CgProfile />, section: "profile" },
              { label: "Job", icon: <AiOutlineAntDesign />, section: "job" },
              {
                label: "Documents",
                icon: <GrDocumentWord />,
                section: "documents",
              },
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="bg-pink-400 hover:text-green-500 transition duration-300 font-semibold hover:bg-pink-200 rounded-lg px-10 relative overflow-hidden group"
                onClick={() => setActiveSection(item.section)}
              >
                <div className="text-center p-2">
                  <div className="flex items-center space-x-1">
                    <div className="text-xl">{item.icon}</div>
                    <p>{item.label}</p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
                </div>
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-3 pb-2  border-b border-red-500 mb-5">
            {[
              {
                label: "Summary",
                icon: <BsInfoCircleFill />,
                section: "about",
              },
              { label: "Timeline", icon: <MdTimeline />, section: "timeline" },
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="bg-pink-400 hover:text-green-500 transition duration-300 font-semibold hover:bg-pink-200 rounded-lg px-5 relative overflow-hidden group"
                onClick={() => setActiveSection(item.section)}
              >
                <div className="text-center p-2">
                  <div className="flex items-center space-x-1">
                    <div className="text-xl">{item.icon}</div>
                    <p>{item.label}</p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
                </div>
              </a>
            ))}
          </div>

          {renderContent()}
        </div>
      </div>
    </>
  );
};

export default SingleEmployee;
