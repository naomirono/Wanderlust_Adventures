import { useRef } from 'react';
import Slider from 'react-slick';
import '../../style.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = ({ setBgImage }) => {
    const sliderRef = useRef(null);

  const cards = [
    { id: 1, title: ' Diani', imageUrl: 'https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/card3.jpg' },
    { id: 2, title: 'Maasai Mara', imageUrl: 'https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/card1.jpg' },
    { id: 3, title: 'Malindi', imageUrl: 'https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/card2.jpg' },
    { id: 4, title: 'Mombasa', imageUrl: 'https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/card4.jpg' },
    { id: 5, title: 'Kilifi', imageUrl: 'https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/card5.jpg' },
    { id: 6, title: 'Watamu', imageUrl: 'https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/card6.jpg' },
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

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  const handleImageClick = (imageUrl) => {
    setBgImage(imageUrl);
  };

  return (
    <div className="flex h-[88vh] pt-24">
      <div className="w-1/2 p-10 ml-16">
        <h1 className="text-4xl font-semibold mb-4 text-white font-montserrat uppercase">
          Discover the Heartbeat of Africa with Unforgettable Kenya Tours
        </h1>
        <p className="mb-4 text-gray-100 text-xl font-sans font-regular">
          Embark on a journey of a lifetime with our Kenya Travel and Tours Company. From the
          iconic savannahs of the Maasai Mara to the pristine beaches of the coastal region, we
          offer curated experiences that immerse you in the diverse landscapes, rich cultures,
          and abundant wildlife that Kenya has to offer. Our expert guides will lead you on
          safaris through untamed wilderness, introduce you to vibrant local communities, and
          ensure every moment is filled with awe and wonder.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[25px]">
          LEARN MORE
        </button>
      </div>
      <div className="w-1/2 mr-10 mt-36 relative">
        <Slider ref={sliderRef} {...sliderSettings}>
          {cards.map(card => (
            <div key={card.id} className="p-2">
              <div className="relative">
              <img
              src={card.imageUrl}
              alt={card.title}
              className="object-cover h-80 w-full rounded-xl"
              onClick={() => handleImageClick(card.imageUrl)}
            />
                <div className="absolute bottom-0 left-0 right-0 text-center text-white p-4">
                  <h2 className="text-xl font-bold font-sans uppercase">{card.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex absolute w-full pt-8">
          <button
            className="border border-white text-white rounded-full py-2 px-4"
            style={{ marginRight: '20px' }}
            onClick={handlePrevClick}
          >
            {'<'}
          </button>
          <button 
          className="border border-white text-white rounded-full py-2 px-4"
          onClick={handleNextClick}
          >
            {'>'}
          </button>
          <div className="border-b-2 border-white w-[550px] absolute bottom-4 ml-32"></div> 
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
