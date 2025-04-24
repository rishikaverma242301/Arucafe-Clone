import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="h-[200vh] bg-[url('/image/bg1.jpg')] bg-cover bg-center">
      <div style={{ backgroundColor: "rgba(0,0,0,0.75)" }} className="h-full w-full pb-40">
        <Navbar />

        <div className="flex flex-col items-center justify-center h-full text-center text-white px-4 pb-5 mt-30" data-aos="fade-up">
          <h5 className=" mt-14 text-orange-400">Visit Our Store</h5>
          <h1 className="text-8xl mb-4">
            Flavor From <br />Around The <br /> World
          </h1>
          <p className="max-w-xl mb-6 mt-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Iusto, sed 
            Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Eaque, natus.
          </p>
          <div className="flex gap-4 mt-8">
            <button className="bg-orange-500 hover:bg-white hover:text-black text-white w-44 h-12 ">
              Book A Table
            </button>
            <button className="bg-transparent border border-white text-white hover:bg-white hover:text-black w-44 h-12">
              Visit Our Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
