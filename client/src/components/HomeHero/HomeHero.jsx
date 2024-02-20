import React, { useState } from 'react';
import bgImage from '../../assets/bg3.jpg';
import Navbar from '../Navbar/Navbar';
import HeroSection from '../HeroSection/HeroSection';

const HomeHero = () => {
  const [backgroundImage, setBackgroundImage] = useState(bgImage);

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }} />
      <div className="absolute inset-0 bg-black bg-opacity-60">
        <Navbar />
        <HeroSection setBgImage={setBackgroundImage} />
      </div>
    </div>
  );
};

export default HomeHero;
