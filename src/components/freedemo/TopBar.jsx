import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <div>
      <div className="flex justify-between items-center border-b-2 border-red-500 shadow-2xl shadow-pink-500/50 py-5 px-28">
          <Link className="p-2 text-2xl font-semibold text-white bg-green-500 hover:bg-pink-300 hover:text-black transition duration-300 rounded-lg">
            Free Demo
          </Link>
          <Link to="/sign-up" className="p-2 text-2xl font-semibold text-white bg-sky-500 hover:bg-pink-300 hover:text-black transition duration-300 rounded-lg">
            Sign Up
          </Link>
        </div>
    </div>
  )
}

export default TopBar
