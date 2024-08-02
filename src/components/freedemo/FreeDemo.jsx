import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { CgProfile } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";

const FreeDemo = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState("");

  const navigate = useNavigate();

  const startDay = currentDate.startOf("month").startOf("week");
  const endDay = currentDate.endOf("month").endOf("week");
  const days = [];

  let date = startDay;
  while (date.isBefore(endDay, "day")) {
    days.push(date);
    date = date.add(1, "day");
  }

  const prevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const nextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  const timeSlots = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
  ];

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    navigate("/confirmation", {
      state: { selectedDate: selectedDate.format("D MMMM YYYY"), selectedTime },
    });
  };

  return (
    <div className="flex">
      <div className="w-full h-full p-0 bg-pink-200">
        <div className="flex justify-between items-center border-b-2 border-red-500 shadow-2xl shadow-pink-500/50 py-5 px-28">
          <Link className="p-2 text-3xl font-bold text-white bg-green-500 hover:bg-pink-300 hover:text-black transition duration-300 rounded-lg">
            Free Demo
          </Link>
          <button className="p-2 text-3xl font-bold text-white bg-sky-500 hover:bg-pink-300 hover:text-black transition duration-300 rounded-lg">
            Sign Up
          </button>
        </div>

        <div className="p-12 mb-7">
          <div className="p-20 bg-pink-300 rounded-2xl shadow-2xl shadow-pink-500/50 text-center flex justify-center items-center">
            <div className="p-10 bg-pink-200">
              <div className="flex flex-col justify-center items-center">
                <CgProfile className="text-9xl mb-5 bg-gray-200 rounded-full" />
                <h2 className="text-2xl font-semibold">
                  Time Champ Product Demonstration
                </h2>
              </div>
              <div className="max-w-md mx-auto mt-10 bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <button
                    onClick={prevMonth}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    &lt;
                  </button>
                  <h2 className="text-lg font-semibold">
                    {currentDate.format("MMMM YYYY")}
                  </h2>
                  <button
                    onClick={nextMonth}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    &gt;
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div key={day} className="text-center font-semibold">
                        {day}
                      </div>
                    )
                  )}
                  {days.map((day) => (
                    <div
                      key={day.toString()}
                      className={`p-2 rounded-lg cursor-pointer ${
                        day.month() === currentDate.month()
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-400"
                      }`}
                      onClick={() => handleDateClick(day)}
                    >
                      <div className="text-center mb-2">{day.date()}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-10 bg-black">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl font-semibold text-white pb-5">
                  Meeting Duration
                </h2>
                <div className="bg-gray-200 rounded-lg px-32 py-2 cursor-pointer mb-10 mt-10">
                  <p className="text-black">30 Mins</p>
                </div>

                <div className="rounded-lg pb-10">
                  <p className="text-white font-semibold text-lg">
                    What time works best?
                  </p>
                  <p className="text-white text-lg pt-5">
                    Showing times for{" "}
                    <span className="font-bold">
                      {selectedDate.format("D MMMM YYYY")}
                    </span>
                  </p>
                </div>
                <div className="rounded-lg flex justify-between items-center mb-10 cursor-pointer">
                  <p className="text-white font-semibold text-lg">
                    America/Los_Angeles
                  </p>
                  <FaAngleDown className="text-white text-lg ml-20" />
                </div>
              </div>
              <div className="max-w-md mx-auto mt-5 bg-white p-4 rounded-lg shadow-md mb-10">
                <div className="flex flex-wrap gap-1 max-h-32 overflow-y-auto">
                  {timeSlots.map((slot, index) => (
                    <div
                      key={slot}
                      className={`text-sm text-center py-1 px-2 rounded bg-white hover:bg-blue-200 transition duration-200 cursor-pointer ${
                        selectedTime === slot ? "bg-blue-200" : ""
                      } ${index >= 7 ? "hidden md:block" : ""}`}
                      onClick={() => handleTimeClick(slot)}
                    >
                      {slot}
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleConfirm}
                  className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeDemo;
