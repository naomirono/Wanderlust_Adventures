import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  const cards = [
    { id: 1, title: 'Card 1', imageUrl: 'https://myretrobucket.s3.eu-north-1.amazonaws.com/IMG_0920.JPG' },
    { id: 2, title: 'Card 2', imageUrl: 'https://myretrobucket.s3.eu-north-1.amazonaws.com/IMG_0920.JPG' },
    { id: 3, title: 'Card 3', imageUrl: 'https://myretrobucket.s3.eu-north-1.amazonaws.com/IMG_0920.JPG' },
    { id: 4, title: 'Card 4', imageUrl: 'https://myretrobucket.s3.eu-north-1.amazonaws.com/IMG_0920.JPG' },
    { id: 5, title: 'Card 5', imageUrl: 'https://myretrobucket.s3.eu-north-1.amazonaws.com/IMG_0920.JPG' },
    { id: 6, title: 'Card 6', imageUrl: 'https://myretrobucket.s3.eu-north-1.amazonaws.com/IMG_0920.JPG' },
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
    <div className="flex h-[89vh] pt-36">
      <div className="w-1/2 p-10 ml-16">
        <h1 className="text-5xl font-bold mb-4">Discover the Heartbeat of Africa with Unforgettable Kenya Tours</h1>
        <p className="mb-4">Embark on a journey of a lifetime with our Kenya Travel and Tours Company. From the iconic savannahs of the Maasai Mara to the pristine beaches of the coastal region, we offer curated experiences that immerse you in the diverse landscapes, rich cultures, and abundant wildlife that Kenya has to offer. Our expert guides will lead you on safaris through untamed wilderness, introduce you to vibrant local communities, and ensure every moment is filled with awe and wonder.</p>
        <button className="bg-turquoise-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[25px]">LEARN MORE</button>
      </div>
      <div className="w-1/2 mr-10 mt-32">
        <Slider {...sliderSettings}>
          {cards.map(card => (
            <div key={card.id} className="p-2">
              <div className="relative">
                <img src={card.imageUrl} alt={card.title} className="object-cover h-80 w-full rounded-xl" />
                <div className="absolute bottom-0 left-0 right-0 text-center text-white p-4">
                  <h2 className="text-xl font-bold">{card.title}</h2>
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
