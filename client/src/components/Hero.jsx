import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'
import card4 from '../assets/card4.jpg'
import card5 from '../assets/card5.jpg'
import card6 from '../assets/card6.jpg'


const HeroSection = () => {
  const cards = [
    { id: 1, title: ' Diani', imageUrl: card3 },
    { id: 2, title: 'Maasai Mara', imageUrl: card1 },
    { id: 3, title: 'Malindi', imageUrl: card2 },
    { id: 4, title: 'Mombasa', imageUrl: card4 },
    { id: 5, title: 'Kilifi', imageUrl: card5 },
    { id: 6, title: 'Watamu', imageUrl: card6 },
  ];

  const sliderSettings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    
    
  };

  return (
    <div className="flex h-[89vh] pt-28">
      <div className="w-1/2 p-10 ml-16">
        <h1 className="text-4xl font-bold mb-4 text-white font-fira uppercase">Discover the Heartbeat of Africa with Unforgettable Kenya Tours</h1>
        <p className="mb-4 text-gray-100 text-xl font-inter">Embark on a journey of a lifetime with our Kenya Travel and Tours Company. From the iconic savannahs of the Maasai Mara to the pristine beaches of the coastal region, we offer curated experiences that immerse you in the diverse landscapes, rich cultures, and abundant wildlife that Kenya has to offer. Our expert guides will lead you on safaris through untamed wilderness, introduce you to vibrant local communities, and ensure every moment is filled with awe and wonder.</p>
        <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[25px]">LEARN MORE</button>
      </div>
      <div className="w-1/2 mr-10 mt-32">
        <Slider {...sliderSettings}>
          {cards.map(card => (
            <div key={card.id} className="p-2">
              <div className="relative">
                <img src={card.imageUrl} alt={card.title} className="object-cover h-80 w-full rounded-xl" />
                <div className="absolute bottom-0 left-0 right-0 text-center text-white p-4">
                  <h2 className="text-xl font-bold font-fira uppercase">{card.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
