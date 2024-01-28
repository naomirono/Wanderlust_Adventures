import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FiSearch, FiCheck } from 'react-icons/fi';

const Navbar = () => {
  const [isTyping, setIsTyping] = useState(false);

  const handleTyping = (e) => {
    setIsTyping(e.target.value !== ''); 
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src='https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/W_logo.png' alt="Logo" className="h-16" />
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex space-x-5">
            <li><a href="#" className="text-white text-md uppercase font-sans font-regular">Home</a></li>
            <li><a href="#" className="text-white text-md uppercase font-sans font-regular">Top Deals</a></li>
            <li><a href="#" className="text-white text-md uppercase font-sans font-regular">Destinations</a></li>
            <li><a href="#" className="text-white text-md uppercase font-sans font-regular">Contacts</a></li>
            <li><a href="#" className="text-white text-md uppercase font-sans font-regular">Blog</a></li>
          </ul>
        </div>
        <div className="relative flex items-center">
          <div className="absolute left-0 pl-2 top-1/2 transform -translate-y-1/2 text-gray-400">
            <div className={isTyping ? 'bg-orange-500 text-white p-1 rounded-full text-xl' : ''}>
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
  <a href="#" className="text-white px-6 py-2 border border-orange-500 rounded-full hover:bg-orange-500">Login</a>
  <button className="bg-orange-500 text-white px-6 py-2 rounded-full border border-orange-500 hover:border-orange-700  hover:bg-orange-700">Join Us</button>
</div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
