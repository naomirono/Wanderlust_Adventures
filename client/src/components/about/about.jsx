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
          <h4 className="text-2xl font-semibold mb-4">Who We Are</h4>
          <h2 className="text-3xl font-bold mb-2">Real People Delivering Real Results</h2>
          <p className="mb-4">
            Brief description of who we are and what we do. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* Two Points Section */}
          <div className="flex mb-4">
            <div className="mr-4 border-2 border-black">
              <h3 className="text-xl font-semibold mb-2">Point 1</h3>
              <p>Explanation of Point 1.</p>
            </div>
            <div className='border-2 border-black'>
              <h3 className="text-xl font-semibold mb-2">Point 2</h3>
              <p>Explanation of Point 2.</p>
            </div>
          </div>

          {/* Additional Paragraph */}
          <p className="mb-4">
            Another paragraph describing additional information about the travel agency.
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
