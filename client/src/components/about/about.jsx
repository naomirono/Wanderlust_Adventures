import React from 'react';
import aboutImg from '../../assets/Blue_Orange.png'

const About = () => {
  return (
    <div className="py-24 mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
      <div className="flex">
        {/* Left Section */}
        <div className="w-1/2">
          <img src={aboutImg} alt="Airplane" className="w-full" />
        </div>

        {/* Right Section */}
        <div className="w-1/2 ml-8">
          <h4 className="text-blue-500 text-xl font-extrabold mb-4">WHO WE ARE</h4>
          <h2 className="text-3xl font-bold mb-2">Real People Delivering Real Results</h2>
          <p className="mb-4">
          At Wanderlust, we are passionate about creating unforgettable travel experiences. Our team
            is composed of avid travelers who believe in the transformative power of exploring new places.
          </p>

          {/* Two Points Section */}
          <div className="flex mb-4">
            <div className="mr-4 border-2 border-black">
              <h3 className="text-xl font-semibold mb-2">Expert Planning</h3>
              <p>We meticulously plan every detail of your journey to ensure a seamless and stress-free experience.</p>
            </div>
            <div className='border-2 border-black'>
              <h3 className="text-xl font-semibold mb-2">Customized Packages</h3>
              <p>Our travel packages are tailor-made to suit your preferences, ensuring a personalized adventure for you.</p>
            </div>
          </div>

          {/* Additional Paragraph */}
          <p className="mb-4">
          Embark on a journey with Wanderlust, where every destination is a new story waiting to be written.
            Whether you seek relaxation on pristine beaches, cultural immersion in historic cities, or thrilling
            adventures in exotic landscapes, we have the perfect itinerary for you.
          </p>

          {/* Call to Action Button */}
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
