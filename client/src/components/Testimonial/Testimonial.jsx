
const Testimonial = () => {
  return (
    <div className="bg-cover bg-center my-8" style={{ backgroundImage: `url('https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/bg3.jpg')` }}>
      <div className='bg-black bg-opacity-70'>
        <div className="flex flex-col md:flex-row p-8 max-w-[1100px] mx-auto py-20">

          <div className="w-full md:w-1/2 pr-0 md:pr-8 relative z-10">
            <h6 className="text-l font-fira font-semibold mb-2 text-orange-500">TESTIMONIAL</h6>
            <h2 className="text-5xl font-fira font-semibold mb-4 text-white">What Our <span className='text-orange-500'>Clients</span> Say</h2>
            <p className="text-gray-300 font-inter font-regular text-xl">
              Embarking on a journey with Wanderlust is an unparalleled experience. Every destination is a masterpiece.
            </p>
          </div>

          <div className="w-full md:w-1/2 pl-0 md:pl-8 relative z-10 mt-6">
            <div className="relative bg-white p-8 border border-gray-300 rounded-lg shadow">
              <div className="absolute top-2 left-[-4px] mt-2 ml-2 text-2xl"><i className="fa-solid fa-quote-left text-orange-500"></i></div>
              <p className="font-inter font-regular">
                As an avid traveler, I've had the pleasure of exploring breathtaking destinations around the world, and I owe a huge thanks to Wanderlust. Their impeccable service and attention to detail have transformed my journeys into unforgettable experiences."
              </p>
              <div className="flex items-center mt-4">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Client"
                />
                <div className="ml-4">
                  <p className="font-bold font-inter font-regular">John Doe</p>
                  <p className="text-gray-500 font-inter font-regular">Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
