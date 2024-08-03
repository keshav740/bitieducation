import React from 'react';
import { FaWhatsappSquare } from "react-icons/fa";


const Chat = () => {
  return (
    <div>
       <a
          href="https://wa.me/1234567890" // Replace with your desired phone number
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsappSquare className="text-green-600 cursor-pointer text-5xl mx-auto" />
        </a>
    </div>
  )
}

export default Chat
