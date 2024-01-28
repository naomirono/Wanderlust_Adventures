import React from "react";

const About = () => {
  return (
    <section className='bg-gray-100'>
    <div className="py-12 mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
      <div className="flex">
        
        <div className="w-1/2">
          <img src='https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/AboutWanderlust.png' alt="Airplane" className="w-full" />
        </div>

        <div className="w-1/2 ml-8">
          <h4 className="text-orange-500 text-xl font-semibold mb-4 font-fira">WHO WE ARE</h4>
          <h2 className="text-4xl font-semibold font-fira mb-2">Wanderlust: Where Your Adventure Begins</h2>
          <p className="mb-6 font-inter">
          At Wanderlust, we are passionate about creating unforgettable travel experiences. Our team
            is composed of avid travelers who believe in the transformative power of exploring new places.
          </p>

          <div className="flex mb-6">
            <div className="w-1/2 mr-4 border-2 border-orange-500 rounded-[8px] flex items-start p-2">
              <i className="fa-solid fa-list-check text-4xl pt-4 text-orange-500"></i>
              <div className='p-2'>
                <h3 className="text-l font-semibold font-fira">Expert Planning</h3>
                <p className="text-sm font-inter">We meticulously plan every detail of your journey.</p>
              </div>
            </div>
            <div className='w-1/2 border-2 border-orange-500 rounded-[8px] flex items-start p-2'>
              <i className="fa-solid fa-suitcase text-4xl pt-4 text-orange-500"></i>
              <div className='p-2'>
               <h3 className="text-l font-semibold font-fira">Customized Packages</h3>
               <p className='text-sm font-inter'>Our travel packages are tailor-made to suit your preferences.</p>
              </div>  
            </div>
          </div>

          <p className="mb-4 font-inter">
          Embark on a journey with Wanderlust, where every destination is a new story waiting to be written.
            Whether you seek relaxation on pristine beaches, cultural immersion in historic cities, or thrilling
            adventures in exotic landscapes, we have the perfect itinerary for you.
          </p>

          <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-blue-600 font-fira rounded-[25px]">
            Plan Your Adventure <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
