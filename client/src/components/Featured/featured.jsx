import React from 'react';

const Features = () => {
  return (
    <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-around items-center">

        <div className="text-center">
          <i className="fa-solid fa-globe text-blue-500 text-4xl mb-2"></i>
          <p className="text-sm font-semibold">Global</p>
          <p className="text-sm font-semibold">Destinations</p>
        </div>

        <div className="text-center">
          <i className="fa-solid fa-money-check-dollar text-blue-500 text-4xl mb-2"></i>
          <p className="text-sm font-semibold">Transparent</p>
          <p className="text-sm font-semibold">Pricing</p>
        </div>

        <div className="text-center">
          <i className="fa-solid fa-face-smile text-blue-500 text-4xl mb-2"></i>
          <p className="text-sm font-semibold">100% Satisfaction</p>
          <p className="text-sm font-semibold">Guarantee</p>
        </div>

        <div className="text-center">
          <i className="fa-solid fa-user-tie text-blue-500 text-4xl mb-2"></i>
          <p className="text-sm font-semibold">Professional & </p>
          <p className="text-sm font-semibold">Qualified</p>
        </div>

        <div className="text-center">
          <i className="fa-solid fa-laptop text-blue-500 text-4xl mb-2"></i>
          <p className="text-sm font-semibold">Online</p>
          <p className="text-sm font-semibold">Booking</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
