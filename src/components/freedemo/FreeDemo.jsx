import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import moment from "moment-timezone";
import { CgProfile } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";
import Chat from "./Chat";
import TopBar from "./TopBar";

const FreeDemo = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState("");
  const [timezone, setTimezone] = useState("Asia/Kolkata");
  const [selectedCountry, setSelectedCountry] = useState({
    value: "Asia/Kolkata",
    label: "India",
  });
  const [timeSlots, setTimeSlots] = useState([]);
  const [showSelect, setShowSelect] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAllCountries, setShowAllCountries] = useState(false);

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

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    navigate("/confirmation", {
      state: {
        selectedDate: selectedDate.format("D MMMM YYYY"),
        selectedTime,
        selectedCountry: selectedCountry.label,
      },
    });
  };

  const countries = [
    { value: "Asia/Kolkata", label: "India" },
    { value: "America/Los_Angeles", label: "USA" },
    { value: "Africa/Harare", label: "Åland Islands" },
    { value: "Asia/Aden", label: "Zimbabwe" },
    { value: "America/Los_Angeles", label: "Yemen" },
    { value: "Pacific/Wallis", label: "Wallis and Futuna" },
    { value: "Europe/Simferopol", label: "Ukraine" },
    { value: "Europe/Bucharest", label: "Romania" },
    { value: "Asia/Anadyr", label: "Russian" },
    { value: "Asia/Manila", label: "Philippines" },
    { value: "Pacific/Auckland", label: "New Zealand" },
    { value: "Antarctica/Macquarie", label: "Australia" },
    { value: "Asia/Kabul", label: "Afghanistan" },
    // Add more countries and their timezones here
  ];

  useEffect(() => {
    const userTimezone =
      Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Kolkata";
    const initialCountry = countries.find(
      (country) => country.value === userTimezone
    ) || { value: "Asia/Kolkata", label: "India" };
    setTimezone(userTimezone);
    setSelectedCountry(initialCountry);

    const slots = [
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

    const convertedSlots = slots.map((slot) => {
      const timeInIST = moment.tz(`2024-01-01 ${slot}`, "Asia/Kolkata");
      const timeInUserTZ = timeInIST.clone().tz(userTimezone);
      return timeInUserTZ.format("hh:mm A");
    });

    setTimeSlots(convertedSlots);
  }, []);

  const handleTimezoneChange = (selectedOption) => {
    setTimezone(selectedOption.value);
    setSelectedCountry(selectedOption);
    setShowSelect(false);
  };

  const filteredCountries = countries.filter((country) =>
    country.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="">
      <div className="w-full h-full p-0 bg-pink-200">
        <TopBar />

        <div className="p-10 mb-7 mt-2">
          <div className="p-12 bg-pink-300 rounded-2xl shadow-2xl shadow-pink-500/50 text-center flex justify-center items-center">
            <div className="p-12 bg-pink-200">
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
                        day.isSame(selectedDate, "day")
                          ? "bg-pink-200 text-black"
                          : day.month() === currentDate.month()
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
                <div
                  className="rounded-lg flex flex-col justify-between items-start mb-10 cursor-pointer relative"
                  onClick={() => setShowSelect(!showSelect)}
                >
                  <div className="flex justify-between items-center w-full">
                    <p className="text-white font-semibold text-lg">
                      {selectedCountry.label}
                    </p>
                    <FaAngleDown className="text-white text-lg ml-20" />
                  </div>
                  {showSelect && (
                    <div className="absolute bg-pink-300 rounded-lg shadow-lg z-10 w-96 max-h-60 overflow-y-auto mt-10">
                      <input
                        type="text"
                        className="w-full p-2 border-b-2 border-gray-300"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <div className="max-h-56 overflow-y-auto">
                        {filteredCountries.slice(0, showAllCountries ? filteredCountries.length : 4).map((country) => (
                          <div
                            key={country.value}
                            className="cursor-pointer p-2 hover:bg-pink-200"
                            onClick={() => handleTimezoneChange(country)}
                          >
                            {country.label}
                          </div>
                        ))}
                        {filteredCountries.length > 4 && !showAllCountries && (
                          <div
                            className="p-2 text-center text-gray-500 cursor-pointer"
                            onClick={() => setShowAllCountries(true)}
                          >
                            + {filteredCountries.length - 4} more
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="max-w-md mx-auto mt-5 bg-white p-4 rounded-lg shadow-md mb-10">
                <div className="flex flex-wrap gap-1 max-h-32 overflow-y-auto">
                  {timeSlots.map((slot, index) => (
                    <div
                      key={slot}
                      className={`text-sm text-center py-1 px-2 rounded cursor-pointer ${
                        selectedTime === slot
                          ? "bg-pink-200 text-black"
                          : "bg-white hover:bg-blue-200"
                      } transition duration-200 ${
                        index >= 7 ? "hidden md:block" : ""
                      }`}
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
          <div className="flex justify-end pt-10">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeDemo;
