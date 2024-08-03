import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Chat from "./Chat";
import TopBar from "./TopBar";

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedDate, selectedTime, selectedCountry } = location.state || {
    selectedDate: null,
    selectedTime: null,
    selectedCountry: null,
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleConfirm = () => {
    // Add your confirm logic here
    alert("Confirmation successful!");
  };

  // Contact Form State
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    phone: '',
    companyName: '',
    country: 'India',
    message: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    surname: '',
    email: '',
    phone: '',
    companyName: '',
    country: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.surname) newErrors.surname = 'Surname is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.companyName) newErrors.companyName = 'Company name is required';
    if (!formData.message) newErrors.message = 'Message is required'; 
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (validate()) {
      // Handle form submission logic
      console.log('Form submitted:', formData);
    }
  };

  const countries = [
    'India',
    'USA',
    'Canada',
    'UK',
    'Australia',
    'Russia',
    'Dubai',
    'Nepal',
    'Philippines', // Corrected typo
    'Singapore',   // Corrected typo
    // Add more countries here
  ];

  return (
    <div className="w-full h-full p-0 bg-pink-200">
      <TopBar />

      <div className="px-10 py-5">
        <div className="p-5 bg-pink-300 rounded-2xl shadow-2xl shadow-pink-500/50 text-center flex justify-center items-center">
          <div className="bg-pink-200 w-180 rounded-lg">
            <div className="pt-5 pb-2">
              <h1 className="text-2xl font-bold mb-4">Your Confirmation</h1>
              <p className="text-lg mb-4">
                You have selected:
                <br /> Date: <strong>{selectedDate}</strong>
                <br /> Time: <strong>{selectedTime}</strong>
                <br /> Location: <strong>{selectedCountry}</strong>
              </p>
              <button
                className="bg-pink-500 py-2 px-5 rounded-xl hover:bg-sky-400 transition duration-300"
                onClick={handleGoBack}
              >
                Edit
              </button>
            </div>
            <div className="mt-2 pb-20 flex justify-center">
              <div className="w-160 p-4 bg-transparent rounded-lg shadow-2xl shadow-pink-500/50 mt-0 h-130 overflow-auto">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="firstName" className="block text-gray-700 text-sm font-semibold mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full p-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="surname" className="block text-gray-700 text-sm font-semibold mb-2">
                      Surname
                    </label>
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      value={formData.surname}
                      onChange={handleChange}
                      className={`w-full p-2 border ${errors.surname ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    />
                    {errors.surname && <p className="text-red-500 text-sm mt-1">{errors.surname}</p>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full p-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="companyName" className="block text-gray-700 text-sm font-semibold mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className={`w-full p-2 border ${errors.companyName ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    />
                    {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="country" className="block text-gray-700 text-sm font-semibold mb-2">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full p-2 border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    >
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full p-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                      rows="4"
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
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
            <div className="flex justify-between mb-10 px-10">
              <button
                type="button" // Ensure button type is "button" to prevent accidental form submission
                onClick={handleGoBack}
                className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200"
              >
                Go Back
              </button>
              <button
                type="button" // Ensure button type is "button" to prevent accidental form submission
                onClick={handleConfirm}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Confirm
              </button>
            </div>
            <div className="pb-5">
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
