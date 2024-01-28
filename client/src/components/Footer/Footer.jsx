import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';


const Footer = () => {
    const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <footer className="text-white py-8 relative" style={{
        backgroundImage: "url('https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/DianiWanderlust.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="max-w-[1100px] mx-auto flex justify-between items-center hidden lg:block relative z-10">
        

        <div className="flex space-x-20 ">
         <div className='pt-2'>
            <h4 className="text-lg font-semibold mb-2 ">Solutions</h4>
            <ul className="text-sm text-gray-300">
              <li className='py-1'>
                <a href="#">Marketing</a>
              </li>
              <li className='py-1'>
                <a href="#">Analytics</a>
              </li>
              <li className='py-1'>
                <a href="#">Commerce</a>
              </li>
            </ul>
          </div>

          
          <div className='pt-2'>
            <h4 className="text-lg font-semibold mb-2">Support</h4>
            <ul className="text-sm text-gray-300">
              <li className='py-1'>
                <a href="#">Help Center</a>
              </li>
              <li className='py-1'>
                <a href="#">Contact Us</a>
              </li>
              <li className='py-1'>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>

          
          <div className='pt-2'>
            <h4 className="text-lg font-semibold mb-2">Company</h4>
            <ul className="text-sm text-gray-300">
              <li className='py-1'>
                <a href="#">About</a>
              </li>
              <li className='py-1'>
                <a href="#">Chefs</a>
              </li>
              <li className='py-1'>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          
           <div className='pt-2'>
            <h4 className="text-lg font-semibold mb-2">Legal</h4>
            <ul className="text-sm text-gray-300">
              <li className='py-1'>
                <a href="#">Claim</a>
              </li>
              <li className='py-1'>
                <a href="#">Privacy Policy</a>
              </li>
              <li className='py-1'>
                <a href="#">Terms of Service</a>
              </li>
              
            </ul>
           </div>
           
          <div className=" w-1/2 flex items-start flex-col">
          
          <div className="p-2 relative z-10 flex flex-col items-center justify-center max-w-[800px] mx-auto">
          <h2 className="text-2xl md:text-3xl Lg:text-3xl font-bold tracking-tight text-white mb-4">Subscribe to Our <span className='text-orange-500'>Newsletter </span> </h2>
          <p className="mb-2 lg:mb-4 text-md md:text-lg lg:text-lg leading-8 text-gray-400">
           Don't miss out on the latest travel trends and exciting experiences that await you on your next getaway!
          </p>
          
          <div className="mt-2 flex max-w-md gap-x-4">
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autoComplete="email" required className="w-full lg:w-[400px] flex-auto rounded-md border-0 border-orange-300 px-3.5 py-2 text-black shadow-sm  sm:text-sm sm:leading-6" placeholder="Enter your email" value={email}
              onChange={handleEmailChange}/>
          <button type="submit" className="flex-none rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 ">Subscribe</button>
        </div>
        </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="max-w-[1100px] mx-auto border-t border-white lg:mt-4 relative z-10"></div>

      {/* Rights Reserved and Social Icons */}
      <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row justify-between items-center mt-4 relative z-10">
        <p className="text-sm lg:mr-6 mb-4 lg:mb-0 text-center lg:text-left"> Copyright &copy; {new Date().getFullYear()} <span className='text-orange-500'>Wanderlust</span>. All rights reserved.</p>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-6">
          <a href="#" className="text-white">
            <FaFacebook className='text-blue-500 hover:text-blue-700 cursor-pointer' size={24}/>
          </a>
          <a href="#" className="text-white">
            <FaTwitter className='text-blue-500 hover:text-blue-700 cursor-pointer' size={24}/>
          </a>
          <a href="#" className="text-white">
            <FaInstagram className='text-pink-500 hover:text-pink-700 cursor-pointer' size={24}/>
          </a>
          <a href="#" className="text-white">
            <FaYoutube className='text-red-500 hover:text-red-700 cursor-pointer' size={24}/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
