import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FiSearch, FiCheck } from 'react-icons/fi';

const Navbar = () => {
  const [isTyping, setIsTyping] = useState(false);

  const handleTyping = (e) => {
    setIsTyping(e.target.value !== ''); 
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white font-bold text-xl mr-4">Logo</div>
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex space-x-5">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">Top Deals</a></li>
              <li><a href="#" className="text-white">Destinations</a></li>
              <li><a href="#" className="text-white">Contacts</a></li>
              <li><a href="#" className="text-white">Blog</a></li>
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
            className="text-gray-500 p-2 pl-10 rounded-3xl w-40 md:w-80 mr-6"
            onChange={handleTyping}
          />

          <div className="flex items-center space-x-4">
            <a href="#" className="text-white"><FaFacebook className="text-xl"/></a>
            <a href="#" className="text-white"><FaInstagram className="text-xl"/></a>
            <a href="#" className="text-white"><FaTwitter className="text-xl"/></a>
            <a href="#" className="text-white"><FaLinkedin className="text-xl"/></a>
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
