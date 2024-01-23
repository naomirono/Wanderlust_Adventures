import React from 'react';

const Features = () => {
  return (
    <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-around items-center">
        {/* Feature 1 */}
        <div className="text-center">
          <i className="fa-solid fa-user-tie text-4xl mb-2"></i>
          <p className="text-sm font-semibold">Professional & </p>
          <p className="text-sm font-semibold">Qualified</p>
        </div>

        {/* Feature 2 */}
        <div className="text-center">
          <i className="fa-solid fa-money-check-dollar text-4xl mb-2"></i>
          <p className="text-sm font-semibold">Transparent</p>
          <p className="text-sm font-semibold">Pricing</p>
        </div>

        {/* Feature 3 */}
        <div className="text-center">
          <i className="fa-solid fa-face-smile text-4xl mb-2"></i>
          <p className="text-sm font-semibold">100% Satisfaction</p>
          <p className="text-sm font-semibold">Guarantee</p>
        </div>

        {/* Feature 4 */}
        <div className="text-center">
          <i className="fa-solid fa-globe text-4xl mb-2"></i>
          <p className="text-sm font-semibold">Global</p>
          <p className="text-sm font-semibold">Destinations</p>
        </div>

        {/* Feature 5 */}
        <div className="text-center">
          <i className="fa-solid fa-laptop text-4xl mb-2"></i>
          <p className="text-sm font-semibold">Online</p>
          <p className="text-sm font-semibold">Booking</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
