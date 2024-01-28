import { useState } from 'react';

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const data = [
    {
        name: 'Diani',
        location: 'Tropical Paradise',
        rating: 4.3,
        image: 'https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/DianiWanderlust.jpg',
        category: 'beach',
      },
      {
        name: 'Watamu',
        location: 'Sunny Island',
        rating: 4.5,
        image: 'https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/card2.jpg',
        category: 'beach',
      },
      {
        name: 'Mombasa',
        location: 'Exotic Coast',
        rating: 4.7,
        image: 'https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/card3.jpg',
        category: 'beach',
      },
      {
        name: 'Samburu',
        location: 'Jungle Adventure',
        rating: 4.6,
        image: 'https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/SamburuWanderlust.jpg',
        category: 'safaris',
      },
      {
        name: 'Tsavo',
        location: 'Wild Savannah',
        rating: 4.2,
        image: 'https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/TsavoWanderlust.jpg',
        category: 'safaris',
      },
      {
        name: 'Amboseli',
        location: 'Serengeti Plains',
        rating: 4.8,
        image: 'https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/AmboseliWanderlust.jpg',
        category: 'safaris',
      },
      {
        name: 'Breathtaking Mountain 1',
        location: 'Snowy Peaks',
        rating: 4.4,
        image: 'https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/card5.jpg',
        category: 'mountains',
      },
      {
        name: 'Scenic Mountain 2',
        location: 'Misty Highlands',
        rating: 4.9,
        image: 'https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/card5.jpg',
        category: 'mountains',
      },
      {
        name: 'Grand Mountain 3',
        location: 'Alpine Vista',
        rating: 4.5,
        image: 'https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/card5.jpg',
        category: 'mountains',
      },
      {
        name: 'Refreshing Waterfall 1',
        location: 'Crystal Cascades',
        rating: 4.1,
        image: 'https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/card5.jpg',
        category: 'waterfall',
      },
      {
        name: 'Soothing Waterfall 2',
        location: 'Hidden Oasis',
        rating: 4.6,
        image: 'https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/card5.jpg',
        category: 'waterfall',
      },
      {
        name: 'Enchanting Waterfall 3',
        location: 'Rainforest Retreat',
        rating: 4.7,
        image: 'https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/card5.jpg',
        category: 'waterfall',
      },
  
  ];

  const filterData = () => {
    if (selectedCategory === 'all') {
      return data.slice(0, 6);
    } else {
      return data.filter(item => item.category === selectedCategory);
    }
  };
  

  return (
      <section className='bg-gray-100'>
    <div className="py-16 container mx-auto max-w-[1000px]">
      <div className="grid grid-cols-2">
      <div>
  <h1 className="text-4xl font-semibold mb-4 font-fira">Explore Wanderlust by <span className='text-orange-500'>Categories</span> </h1>
  <p className="text-gray-600 font-inter">
    Embark on a journey of discovery with Wanderlust, where each category is a gateway to unique experiences.
  </p>
</div>

        <div className="flex justify-end space-x-2">
        <div className='flex justify-center items-center'>
        <button
            className={`mr-2 py-1 px-4 rounded rounded-[25px] border border-orange-500 font-inter ${
              selectedCategory === 'all' ? 'bg-orange-500 text-white py-1 px-4 rounded rounded-[25px]' : ''
            }`}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </button>
          </div>
          
          <div className='flex justify-center items-center'>
        <button
            className={`mr-2 py-1 px-4 rounded rounded-[25px] border border-orange-500 font-inter ${
              selectedCategory === 'beach' ? 'bg-orange-500 text-white py-1 px-4 rounded rounded-[25px]' : ''
            }`}
            onClick={() => setSelectedCategory('beach')}
          >
            Beach
          </button>
          </div>
          <div className='flex justify-center items-center'>
        <button
            className={`mr-2 py-1 px-4 rounded rounded-[25px] border border-orange-500 font-inter ${
              selectedCategory === 'safaris' ? 'bg-orange-500 text-white py-1 px-4 rounded rounded-[25px]' : ''
            }`}
            onClick={() => setSelectedCategory('safaris')}
          >
            Safaris
          </button>
          </div>
          <div className='flex justify-center items-center'>
        <button
            className={`mr-2 py-1 px-4 rounded rounded-[25px] border border-orange-500 font-inter ${
              selectedCategory === 'mountains' ? 'bg-orange-500 text-white py-1 px-4 rounded rounded-[25px]' : ''
            }`}
            onClick={() => setSelectedCategory('mountains')}
          >
            Mountains
          </button>
          </div>
          <div className='flex justify-center items-center'>
        <button
            className={`mr-2 py-1 px-4 rounded rounded-[25px] border border-orange-500 font-inter ${
              selectedCategory === 'waterfall' ? 'bg-orange-500 text-white py-1 px-4 rounded rounded-[25px]' : ''
            }`}
            onClick={() => setSelectedCategory('waterfall')}
          >
            Waterfall
          </button>
          </div>
        </div>
      </div>
      <div className="mt-12 max-w-[1000px] mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {filterData().map((item, index) => (
            <div key={index} className="bg-white p-4 rounded shadow w-full">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-36 object-cover mb-2 rounded"
              />
              <div className="flex">
                  <div className='w-2/3 '>
                  <p className="text-xl font-semibold font-inter">{item.name}</p>
                  <p className="text-gray-500 mb-2 font-inter"><i className="fa-solid fa-location-dot mr-2"></i>{item.location}</p>

                  </div>
                  <div className="flex w-1/3 pl-12">
                <span className="text-orange-500">&#9733;</span>
                <span className="ml-1">{item.rating}</span>
              </div>
              </div>
              
              
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Explore;
