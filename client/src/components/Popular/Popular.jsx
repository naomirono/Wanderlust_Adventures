import { useRef } from 'react';
import Slider from 'react-slick';
import '../../style.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PopularSection = () => {
    const sliderRef = useRef(null);

    const cards = [
      { id: 1, title: 'Diani', imageUrl: 'https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/DianiWanderlust.jpg' },
      { id: 2, title: 'Maasai Mara', imageUrl: 'https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/card1.jpg' },
      { id: 3, title: 'Malindi', imageUrl: 'https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/Zanzibar.jpg' },
      { id: 4, title: 'Mombasa', imageUrl: 'https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/card3.jpg' },
      { id: 5, title: 'Kilifi', imageUrl: 'https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/card6.jpg' },
      { id: 6, title: 'Watamu', imageUrl: 'https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/card2.jpg' },
    ];

    const sliderSettings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,      
        autoplaySpeed: 7500,
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
      <section className='bg-gray-100'>
    <div className="pt-24 pb-8 container mx-auto max-w-[1000px]">
      <div className="grid grid-cols-2">
      <div>
  <h1 className="text-4xl font-semibold mb-4 font-fira">Popular <span className='text-orange-500'>Destinations</span> </h1>
</div>

      </div>
      <div className="mt-8 max-w-[1000px] mx-auto">
        <Slider ref={sliderRef} {...sliderSettings}>
          {cards.map(card => (
            <div key={card.id} className="p-2">
              <div className="relative">
              <img
              src={card.imageUrl}
              alt={card.title}
              className="object-cover h-80 w-full rounded-xl"
            />
                <div className="absolute bottom-0 left-0 right-0 text-center text-white p-4">
                  <h2 className="text-xl font-bold font-sans uppercase">{card.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </section>
  );
};

export default PopularSection;
