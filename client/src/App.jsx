import React from 'react';
import Navbar from './components/Navbar';
import bgImage from '../src/assets/beautiful.jpg';
import HeroSection from './components/Hero';

function App() {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bgImage})` }}>
    <div className='bg-black bg-opacity-40'>
       <Navbar />
       <HeroSection/>
    </div> 
    </div>
  );
}

export default App;
