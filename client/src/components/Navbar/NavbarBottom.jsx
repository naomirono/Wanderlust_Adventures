import React from 'react';

const NavbarBottom = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="relative">
      <div className="flex justify-around py-6 px-2  bg-[#2563eb] text-white fixed bottom-0 left-0 w-full z-20 md:hidden lg:hidden xl:hidden">
        <div className="cursor-pointer hover:text-orange-500" onClick={() => scrollToSection('home')}>
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 512 512">
            <path fill="currentColor" d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z"></path>
            <path fill="currentColor" d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97"></path>
          </svg>
        </div>
        <div className="cursor-pointer" onClick={() => scrollToSection('about')}>
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path fill="currentColor" d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path>
          </svg>
        </div>
        <div className="cursor-pointer" onClick={() => scrollToSection('destinations')}>
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeWidth={2} d="M15 15h4l3 7H2l3-7h4m4-7a1 1 0 1 1-2 0a1 1 0 0 1 2 0M6 8c0 5 6 10 6 10s6-5 6-10c0-3.417-2.686-6-6-6S6 4.583 6 8Z"></path>
          </svg>
        </div>
        <div className="cursor-pointer" onClick={() => scrollToSection('testimonials')}>
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path fill="currentColor" d="M9.075 14.25L12 12.475l2.925 1.775l-.775-3.325l2.6-2.25l-3.425-.275L12 5.25L10.675 8.4l-3.425.275l2.6 2.25zM2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6zm3.15-6H20V4H4v13.125zM4 16V4z"></path>
          </svg>
        </div>
        <div className="cursor-pointer" onClick={() => scrollToSection('blog')}>
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 512 512">
            <path fill="currentColor" d="M41 66.91V415.8c86.5 1 147.5 14.8 206 29.3V141.4c-45.3-30.1-90.4-58.75-206-74.49m430 0C355.4 82.65 310.3 111.3 265 141.4v303.7c58.5-14.5 119.5-28.3 206-29.3zm-20.9 26.6l.8 66.99c-59.4 17.6-114.5 37.9-168.9 56c-.4-20.9-.7-41.7-1.1-62.6c52.8-29.2 111.2-48.1 169.2-60.39M69.01 105.3C129.8 119.4 184.1 136 226.1 150.1l.2 19c-41.6-13.9-101.3-32.3-161.35-46.3zm.12 46.6l35.97 6.5l-3.2 17.8l-35.97-6.5zm54.17 11.3l32.5 6.2l-3.4 17.6l-32.5-6.2zm53.2 10.5l49.6 9.6l-3.4 17.6l-49.6-9.6zm263.1 19.9l5.2 17.2l-56 16.9l-5.2-17.2zm-377.68 4.7C119.2 205 176 212.2 223.8 225l-4.6 17.4c-46-12.4-102.2-19.6-159.38-26.3zM357.1 216l4.8 17.4l-71.7 19.8l-4.8-17.4zm86.4 21l4.8 17.4l-32.8 9.1l-4.8-17.4zm-378.3 1.6l49.9 5.2l-2 18l-49.8-5.4zm76.9 9.8l82.1 12.3l-2.6 17.8l-82.1-12.3zm248.5 3.7l4.8 17.4L288.5 299l-4.8-17.4zm55.8 22.9l4.6 17.4L348.5 319l-4.6-17.4zm-388.06 6.4c29.84 3.1 61.96 7.5 84.46 13v111L59.2 398c-.33-38.9-.48-77.7-.86-116.6m104.56 14.7l61.5 7.5l-2.2 17.8l-61.5-7.5zm161.5 11.8l4.2 17.5l-37.8 9.1l-4.2-17.5zm129.1 4.1l.4 82.2l-78.5 10.2c-.3-23.8-.4-47.7-.7-71.5zM164 334.4l59.8 9.8l-3 17.8l-59.8-9.8zm271.7 1l-42.8 11.3l.3 37.3l42.7-5.6zm-81.4 9.8l3.4 17.6l-68.9 13.1l-3.4-17.6zm-191.1 29.1l62.6 12.4l-3.4 17.6l-62.6-12.4zm186.6 6.8l4 17.6l-62.5 13.9l-4-17.6z"></path>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBottom;
