// Modal.js
import React from "react";
import { GrWindows } from "react-icons/gr";
import { SiApple } from "react-icons/si";
import { FaLinux } from "react-icons/fa6";
import { Link } from "react-router-dom";

const DownloadTimeChampModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-pink-100 bg-opacity-50 flex items-center justify-center">
      <div className="bg-pink-300 p-4 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-2/4 max-h-screen overflow-y-auto">
        <div className="flex justify-end items-center border-b-2 border-red-500 pb-5">
          <button
            onClick={onClose}
            className="text-4xl hover:text-green-500 transition duration-300 font-semibold"
          >
            &times;
          </button>
        </div>
        <div className="pt-5 sm:pt-10">
          <h2 className="text-xl sm:text-2xl font-bold">
            Step 1 : Download Time Champ Setup File
          </h2>
        </div>
        <div>
          <p className="text-base sm:text-lg py-3 sm:py-5">
            Download the Time Champ agent by choosing the operating system of
            your computer from below
          </p>
          <div className="flex flex-col sm:flex-row justify-around py-3 sm:py-5">
            <Link className="hover:bg-pink-400 transition duration-300 rounded-lg bg-pink-100 text-pink-400 hover:text-pink-100 mb-4 sm:mb-0">
              <div className="flex flex-col items-center justify-center border-4 border-pink-400 rounded-lg px-8 sm:px-14 pt-5">
                <GrWindows className="text-4xl sm:text-6xl" />
                <p className="text-base sm:text-lg font-bold py-5">Windows</p>
              </div>
            </Link>
            <Link className="hover:bg-pink-400 transition duration-300 rounded-lg bg-pink-100 text-pink-400 hover:text-pink-100 mb-4 sm:mb-0">
              <div className="flex flex-col items-center justify-center border-4 border-pink-400 rounded-lg px-8 sm:px-14 pt-5">
                <SiApple className="text-4xl sm:text-6xl" />
                <p className="text-base sm:text-lg font-bold py-5">Mac</p>
              </div>
            </Link>
            <Link className="hover:bg-pink-400 transition duration-300 rounded-lg bg-pink-100 text-pink-400 hover:text-pink-100">
              <div className="flex flex-col items-center justify-center border-4 border-pink-400 rounded-lg px-8 sm:px-14 pt-5">
                <FaLinux className="text-4xl sm:text-6xl" />
                <p className="text-base sm:text-lg font-bold py-5">Linux</p>
              </div>
            </Link>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold pt-5 sm:pt-10">
              Step 2 : Exclude Antivirus
            </h2>
            <p className="pt-3 sm:pt-5 text-base sm:text-lg">
              <span className="text-lg sm:text-xl font-bold">Note :</span> The nature of
              the software requires you to exclude our software from anti-virus
              false positives. Please exclude the following folder from your
              antivirus.
            </p>
            <div className="pt-3 sm:pt-5">
              <ul className="list-disc pl-10 sm:pl-20">
                <li className="">
                  %SystemDrive%\Users\*\AppData\Local\TempInstall
                </li>
                <li className="py-3 sm:py-5">
                  %SystemDrive%\Users\*\AppData\Local\TimeChamp Or Svcvtt
                </li>
              </ul>
            </div>
            <p className="text-base sm:text-lg">
              Please refer to this
              <span className="text-blue-400 font-semibold p-1 sm:p-2 tracking-wider text-lg sm:text-xl">
                <Link>article</Link>
              </span>
              to exclude the antivirus
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold pt-5 sm:pt-10">
              Step 3 : Install the Setup File
            </h2>
            <p className="pt-3 sm:pt-5 text-base sm:text-lg">
              Double click on the setup file to install the Time Champ agent,
              setup will be installed in the background. If you face any problem
              while installing, please refer to this <span className="text-blue-400 font-semibold p-1 sm:p-2 tracking-wider text-lg sm:text-xl">
                <Link>article</Link>
              </span> to resolve the
              installation problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadTimeChampModal;
