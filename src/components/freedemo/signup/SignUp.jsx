import React, { useState } from "react";
import TopBar from "../TopBar";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaUser, FaEnvelope } from "react-icons/fa";
import Carousel from "./Carousel";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agree: true,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log("Form submitted:", formData);
    }
  };

  const slides = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLJF9_3Nr5fgyGE89vqU3_hJkYb9Yd4WYAJQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6_21JC7NNKTo5Pb8F5aO1V3_8DrI_AfXJfQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRPgttrwqJJRqysbKJp2KHCQ8lgxPY46dOfg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWLXrluV2NPGL8l7jmuEOzC2BTY30lLaHjfw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_b-KxQQmpoJLe6PqDMt_ZEHOECNBbax83ByXcod8ATA_5V4QWkK7QTw8kbQA_XPNWON8&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfgyoURyd-HDUtupowk0AAMerQ7clSoz92ODSmLvs1GRlS41d9fzOCDTS3Z4nt5iyUFLQ&usqp=CAU",
  ];

  return (
    <div className="">
      <div className="w-full h-screen p-0 bg-pink-200">
        <TopBar />

        <div className="p-10 mb-7 mt-2 ">
          <div className="p-12 bg-pink-300 rounded-2xl shadow-2xl shadow-pink-500/50 text-center flex justify-center items-center h-180">
            <div className="p-12 bg-pink-200 rounded-lg w-180 h-140">
              <Carousel>
                {slides.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Slide ${index + 1}`}
                    className="w-180 h-130 rounded-lg"
                  />
                ))}
              </Carousel>
            </div>

            <div className="p-10 bg-pink-400 shadow-2xl shadow-pink-500/50 text-white rounded-lg">
              <form onSubmit={handleSubmit}>
                <h2 className="text-3xl font-semibold py-5">
                  Create your free account
                </h2>
                <p>Your account will be created in less than 10 seconds</p>
                <div className="mb-4 relative">
                  <label
                    htmlFor="name"
                    className="block text-white text-sm font-semibold mb-2"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-2.5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-2 pl-10 border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } rounded-lg text-black`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="mb-4 relative">
                  <label
                    htmlFor="email"
                    className="block text-white text-sm font-semibold mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-2.5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-2 pl-10 border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-lg text-black`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-white text-sm font-semibold mb-2"
                  >
                    Phone Number
                  </label>
                  <PhoneInput
                    country={"in"}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    inputStyle={{ width: "100%", borderRadius: "8px" }}
                    containerStyle={{
                      border: errors.phone ? "1px solid red" : "1px solid gray",
                      borderRadius: "8px",
                    }}
                    className="text-black"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-white text-sm font-semibold mb-2">
                    <input
                      type="checkbox"
                      name="agree"
                      checked={formData.agree}
                      onChange={(e) =>
                        setFormData({ ...formData, agree: e.target.checked })
                      }
                      className="mr-2"
                    />
                    I agree to the terms and conditions
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
