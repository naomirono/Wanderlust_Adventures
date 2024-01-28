
const HeroSection = () => {
   
  return (
    <div className="flex h-[88vh] pb-10 items-center">
      <div className="w-1/2 pl-10 ml-16 pb-16">
        <h1 className="text-5xl font-semibold mb-8 text-white font-montserrat uppercase">
          Discover the Heartbeat of Africa with <span className="text-orange-500">Wanderlust</span> 
        </h1>
        <p className="mb-4 text-gray-100 text-lg font-sans font-regular">
          Discover Kenya's beauty with our curated tours — from Maasai Mara to coastal beaches. 
          Our guides ensure every moment is filled with awe and wonder.
        </p>
        <button className="bg-orange-500 border-2 border-orange-500 hover:border-orange-700 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-[25px] mr-12">
        <i className="fa-solid fa-arrow-right mr-2"></i>About Us
        </button>
        <button className="border-2 border-orange-500 hover:border-orange-700 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-[25px]">
        <i className="fa-solid fa-arrow-right mr-2"></i>Our Services
        </button>
      </div>
      <div className="w-1/2 mr-10 relative">
           <img
              src='https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/WanderlustHero.png'
              alt='Discount Image'
              className="object-contain w-full h-[60vh]"
            />
        
      </div>
    </div>
  );
};

export default HeroSection;
