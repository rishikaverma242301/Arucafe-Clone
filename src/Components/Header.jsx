import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="relative h-[200vh] bg-[url('/image/bg1.jpg')] bg-cover bg-center">
      <div style={{ backgroundColor: "rgba(0,0,0,0.75)" }} className="h-full w-full pb-40">
        <Navbar />

        {/* Main Text Content */}
        <div className="flex flex-col items-center justify-center h-full text-center text-white px-4 z-10" data-aos="fade-up">
          <h5 className="mt-14 text-orange-400 text-lg sm:text-xl md:text-2xl">Visit Our Store</h5>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 mt-4">
            Flavor From <br /> Around The <br /> World
          </h1>

          <p className="max-w-md sm:max-w-lg md:max-w-2xl mb-6 mt-6 text-sm sm:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Iusto, sed 
            Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Eaque, natus.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="bg-orange-500 hover:bg-white hover:text-black text-white w-44 h-12">
              Book A Table
            </button>
            <button className="bg-transparent border border-white text-white hover:bg-white hover:text-black w-44 h-12">
              Visit Our Store
            </button>
          </div>
        </div>

        {/* Right-Aligned Image */}
        <div className="absolute right-4 bottom-10 md:right-10 md:bottom-30">
  <img 
    src="/image/papa.jpg" 
    alt="Papa" 
    className="w-[80vw] h-auto md:w-[50vh] md:h-[60vh]" 
  />
</div>

      </div>
    </div>
  );
};

export default Header;
