import { useState } from 'react';
import bgImage from '../../assets/bg3.jpg';
import HeroSection from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';

const HomeHero = () => {
    const [backgroundImage, setBackgroundImage] = useState(bgImage);
    
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='bg-black bg-opacity-40'>
        <Navbar />
        <HeroSection setBgImage={setBackgroundImage} />
      </div>
    </div>
  )
}

export default HomeHero