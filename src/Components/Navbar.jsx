import React from 'react';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="bg-transparent text-white py-3 px-4">
      <nav className="flex items-center justify-between">
        
        <ul className="md:flex space-x-6 ml-4">
          <li><a href="#" className="hover:text-orange-500">Home</a></li>
          <li><a href="#" className="hover:text-orange-500">Menu</a></li>
          <li><a href="#" className="hover:text-orange-500">Reservation</a></li>
        </ul>

      
          <div className="flex justify-center ">
            <img src="/image/logo.png" alt="logo" className="h-20 w-auto mx-auto ml-8" />
          </div>
        

        <ul className="md:flex space-x-6">
          <li><a href="#" className="hover:text-orange-500">Shop</a></li>
          <li><a href="#" className="hover:text-orange-500">Blog</a></li>
          <li><a href="#" className="hover:text-orange-500">Page</a></li>
        </ul>

        <div className="md:flex items-center space-x-4 ml-6">
          <FaUser className="hover:text-orange-500" />
          <div className="relative">
            <FaHeart className="hover:text-orange-500" />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-xs rounded-full px-1">7</span>
          </div>
          <div className="relative">
            <FaShoppingCart className="hover:text-orange-500" />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-xs rounded-full px-1">0</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
