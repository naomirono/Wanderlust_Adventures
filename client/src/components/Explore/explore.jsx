import { useState } from 'react';
import { data } from './exploreData';

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

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
