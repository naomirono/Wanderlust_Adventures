import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FiSearch, FiCheck } from 'react-icons/fi';
import LogoImage from '../assets/W_logo.png'

const Navbar = () => {
  const [isTyping, setIsTyping] = useState(false);

  const handleTyping = (e) => {
    setIsTyping(e.target.value !== ''); 
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={LogoImage} alt="Logo" className="h-16" />
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex space-x-5">
            <li><a href="#" className="text-white text-md uppercase font-inter">Home</a></li>
            <li><a href="#" className="text-white text-md uppercase font-inter">Top Deals</a></li>
            <li><a href="#" className="text-white text-md uppercase font-inter">Destinations</a></li>
            <li><a href="#" className="text-white text-md uppercase font-inter">Contacts</a></li>
            <li><a href="#" className="text-white text-md uppercase font-inter">Blog</a></li>
          </ul>
        </div>
        <div className="relative flex items-center">
          <div className="absolute left-0 pl-2 top-1/2 transform -translate-y-1/2 text-gray-400">
            <div className={isTyping ? 'bg-gray-500 text-white p-1 rounded-full text-xl' : ''}>
              {isTyping ? <FiCheck /> : <FiSearch />}
            </div>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="text-gray-500 p-2 pl-10 rounded-3xl w-40 md:w-80 mr-6 font-inter text-md"
            onChange={handleTyping}
          />

          <div className="flex items-center space-x-4">
            <a href="#" ><FaFacebook className="text-3xl bg-white rounded-full p-1 text-blue-500 hover:text-blue-700 cursor-pointer"/></a>
            <a href="#" ><FaInstagram className="text-3xl bg-white rounded-full p-1 text-pink-500 hover:text-pink-700 cursor-pointer"/></a>
            <a href="#" ><FaTwitter className="text-3xl bg-white rounded-full p-1 text-blue-500 hover:text-blue-700 cursor-pointer"/></a>
            <a href="#" ><FaLinkedin className="text-3xl bg-white rounded-full p-1 text-blue-500 hover:text-blue-700 cursor-pointer"/></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
