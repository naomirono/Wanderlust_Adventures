import React, { useState } from 'react';
import Navbar from './components/Navbar';
import bgImage from '../src/assets/bg3.jpg';
import HeroSection from './components/Hero';

function App() {
  const [backgroundImage, setBackgroundImage] = useState(bgImage);

  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='bg-black bg-opacity-40'>
        <Navbar />
        <HeroSection setBgImage={setBackgroundImage} />
      </div>
    </div>
  );
}

export default App;
