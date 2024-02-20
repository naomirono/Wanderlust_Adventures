const HeroSection = () => {
  return (
    <div id="home" className="flex flex-col-reverse md:flex-row md:h-[88vh] md:pb-10 items-center px-2 mt-28 md:mt-0">
      <div className="w-full mt-4 md:w-1/2 md:pl-10 md:ml-16 md:pb-16">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-8 text-white font-montserrat uppercase">
          Discover the Heartbeat of Africa with <span className="text-orange-500">Wanderlust</span>
        </h1>
        <p className="md:mb-4 text-gray-100 text-base md:text-lg font-sans font-regular">
          Discover Kenya's beauty with our curated tours — from Maasai Mara to coastal beaches.
          Our guides ensure every moment is filled with awe and wonder.
        </p>
        <button className="bg-orange-500 border-2 border-orange-500 hover:border-orange-700 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-[25px] mr-6 md:mr-12 mb-2 md:mb-0 ml-10">
          <i className="fa-solid fa-arrow-right mr-2"></i>About Us
        </button>
        <button className="border-2 border-orange-500 hover:border-orange-700 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-[25px]">
          <i className="fa-solid fa-arrow-right mr-2"></i>Our Services
        </button>
      </div>
      <div className="w-full md:w-1/2 md:mt-4 relative">
        <img
          src="https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/WanderlustHero.png"
          alt="Discount Image"
          className="object-contain w-full h-full md:h-[60vh]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
