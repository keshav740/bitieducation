import React, { useState, useEffect, useRef } from 'react';

const TopBar = () => {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);

  const handleMouseEnter1 = () => {
    setDropdownOpen1(true);
  };

  const handleMouseLeave1 = () => {
    // Comment out to prevent closing on mouse leave
    // setDropdownOpen1(false);
  };

  const handleMouseEnter2 = () => {
    setDropdownOpen2(true);
  };

  const handleMouseLeave2 = () => {
    // Comment out to prevent closing on mouse leave
    // setDropdownOpen2(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
      setDropdownOpen1(false);
    }
    if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
      setDropdownOpen2(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown1 = () => {
    setDropdownOpen1(!dropdownOpen1);
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2);
  };

  return (
    <div className="bg-pink-200 fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-4 border-b border-red-600">
      <div className="text-2xl">Logo</div>
      <div className="flex space-x-2 items-center">
        {/* Menu 2 Links */}
        <a href='#' className="flex items-center py-2 px-4 rounded transition duration-200 hover:bg-pink-300">
          Menu 2
        </a>
        <a href='#' className="flex items-center py-2 px-4 rounded transition duration-200 hover:bg-pink-300">
          Menu 2
        </a>
        <a href='#' className="flex items-center py-2 px-4 rounded transition duration-200 hover:bg-pink-300">
          Menu 2
        </a>

        {/* Dropdown Menu 1 */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
          ref={dropdownRef1}
        >
          <button
            onClick={toggleDropdown1}
            className="flex items-center py-2 px-4 rounded transition duration-200 hover:bg-pink-300"
          >
            Menu 1
            <svg
              className={`w-4 h-4 ml-1 transform ${dropdownOpen1 ? 'rotate-180' : 'rotate-0'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              transition="transform 0.3s ease"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.832.445l4.911 7a1 1 0 01-.832 1.555H5.089a1 1 0 01-.832-1.555l4.911-7A1 1 0 0110 3zM5.268 10h9.465L10 5.236 5.268 10zm9.465 1H5.268L10 14.764 14.733 11z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {dropdownOpen1 && (
            <div className="absolute right-0 mt-2 bg-pink-200 rounded py-1 w-48">
              <a href="#" className="block py-2 px-4 text-sm hover:bg-pink-100" onClick={() => setDropdownOpen1(false)}>Profile</a>
              <a href="#" className="block py-2 px-4 text-sm hover:bg-pink-100" onClick={() => setDropdownOpen1(false)}>Settings</a>
              <a href="#" className="block py-2 px-4 text-sm hover:bg-pink-100" onClick={() => setDropdownOpen1(false)}>Logout</a>
            </div>
          )}
        </div>

        {/* Dropdown Menu 2 */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
          ref={dropdownRef2}
        >
          <button
            onClick={toggleDropdown2}
            className="flex items-center py-2 px-4 rounded transition duration-200 hover:bg-pink-300"
          >
            Menu 2
            <svg
              className={`w-4 h-4 ml-1 transform ${dropdownOpen2 ? 'rotate-180' : 'rotate-0'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              transition="transform 0.3s ease"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.832.445l4.911 7a1 1 0 01-.832 1.555H5.089a1 1 0 01-.832-1.555l4.911-7A1 1 0 0110 3zM5.268 10h9.465L10 5.236 5.268 10zm9.465 1H5.268L10 14.764 14.733 11z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {dropdownOpen2 && (
            <div className="absolute right-0 mt-2 bg-pink-200 rounded py-1 w-48">
              <a href="#" className="block py-2 px-4 text-sm hover:bg-pink-100" onClick={() => setDropdownOpen2(false)}>Link 1</a>
              <a href="#" className="block py-2 px-4 text-sm hover:bg-pink-100" onClick={() => setDropdownOpen2(false)}>Link 2</a>
              <a href="#" className="block py-2 px-4 text-sm hover:bg-pink-100" onClick={() => setDropdownOpen2(false)}>Link 3</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
