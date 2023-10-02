import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white font-bold text-xl mr-4">Logo</div>
          <ul className="hidden md:flex space-x-4">
            <li><a href="#" className="text-white">Home</a></li>
            <li><a href="#" className="text-white">Top Deals</a></li>
            <li><a href="#" className="text-white">Destinations</a></li>
            <li><a href="#" className="text-white">Contacts</a></li>
            <li><a href="#" className="text-white">Blog</a></li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <input type="text" placeholder="Search" className="p-2 rounded" />
          </div>
          <div className="flex items-center space-x-2">
            <a href="#" className="text-white"><FaFacebook /></a>
            <a href="#" className="text-white"><FaInstagram /></a>
            <a href="#" className="text-white"><FaTwitter /></a>
            <a href="#" className="text-white"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
