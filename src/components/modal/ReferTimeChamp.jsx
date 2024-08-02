import React, { useState } from "react";
import { FaShare, FaCopy, FaWhatsappSquare, FaLinkedin, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReferTimeChamp = ({ isOpen, onClose }) => {
  // Initialize state for copy success message
  const [copySuccess, setCopySuccess] = useState('');

  // Link to be copied
  const linkToCopy = 'https://www.timechamp.io/?ui=YjgyYzRhYjktODhhOS00MTdjLThjZWUtMzlkYWY1ODY3Y2E0&ci=ODAxNjA5NGEtZTg2Zi00N2VlLThiOTYtMjcwZTI2NjY1OTdl&sa=Yml0aWVkdWNhdGlvbg==';

  const handleCopy = () => {
    navigator.clipboard.writeText(linkToCopy).then(() => {
      setCopySuccess('Refer link copied to clipboard successfully');
      setTimeout(() => setCopySuccess(''), 2000); // Clear message after 2 seconds
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const handleShare = (platform) => {
    let shareUrl = '';
    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(linkToCopy)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(linkToCopy)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(linkToCopy)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(linkToCopy)}`;
        break;
      default:
        return;
    }
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-pink-100 bg-opacity-50 flex items-center justify-center">
      <div className="bg-pink-300 p-4 rounded-lg shadow-lg w-2/4">
        <div className="flex justify-between items-center border-b-2 border-red-500 pb-5">
          <h2 className="text-3xl font-semibold">Refer Time Champ</h2>
          <button
            onClick={onClose}
            className="text-4xl hover:text-green-500 transition duration-300 font-semibold"
          >
            &times;
          </button>
        </div>

        <div className="flex flex-col items-center justify-center pt-10 text-lg">
          <p>
            Refer Time Champ to your friends, You will get 30% revenue from
            their paid revenue for the first three months!
          </p>
          <p className="pt-5">
            Also users signup with your link will get 30% off on their first
            invoice.
          </p>
          <div className="flex flex-col items-center justify-center pt-10">
            <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex items-center justify-between border-4 border-pink-400 p-2 pt-2 rounded-lg">
              <input
                type="text"
                className="w-full px-4 pt-2 rounded-lg focus:outline-none bg-transparent placeholder-blue-500"
                placeholder="Enter your friend's Email Address . . . . . . . . ."
              />
              <button className="ml-2 pb-2 px-4 font-semibold text-pink-100 rounded-lg flex justify-center items-center border-4 border-sky-400 hover:bg-sky-400 transition duration-300">
                <FaShare className="mr-2" />
                Share
              </button>
            </div>
            <p className="">
              To invite multiple people, separate the emails by comma ','
            </p>
            <p className="py-5">
              ---------------------------------------- Or
              ----------------------------------------
            </p>
            <p>Share your link</p>

            <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex items-center justify-between border-4 border-pink-400 p-2 pt-2 rounded-lg">
              <Link
                to={linkToCopy}
                className="text-blue-500"
                target="_blank"
              >
                https://www.timechamp.io/?ui=YjgyYzRhYjktOD== . . . . . . 
              </Link>
              <button 
                onClick={handleCopy}
                className="ml-2 pb-2 px-4 font-semibold text-pink-100 rounded-lg flex justify-center items-center border-4 border-sky-400 hover:bg-sky-400 transition duration-300"
              >
                <FaCopy className="mr-2" />
                Copy
              </button>
            </div>
            <div className="flex py-10 text-6xl space-x-4">
              <FaWhatsappSquare
                className="text-green-600 cursor-pointer"
                onClick={() => handleShare('whatsapp')}
              />
              <FaLinkedin
                className="text-sky-700 cursor-pointer"
                onClick={() => handleShare('linkedin')}
              />
              <FaTwitterSquare
                className="text-sky-500 cursor-pointer"
                onClick={() => handleShare('twitter')}
              />
              <FaFacebookSquare
                className="text-blue-700 cursor-pointer"
                onClick={() => handleShare('facebook')}
              />
            </div>
            {copySuccess && <p className="py-10 text-xl text-green-600">{copySuccess}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferTimeChamp;
