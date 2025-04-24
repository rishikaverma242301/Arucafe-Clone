import React from 'react';
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <div className="p-7" style={{ backgroundColor: '#262626' }}>
      <div className="flex flex-col md:flex-row justify-between text-white gap-10">
        
        <div className="md:w-1/3">
          <img src="/image/logo.png" alt="Logo" />

          <p className="mt-4">
            Lectus vestibulum mattis ullamcorperen <br /> velit sed ullam corper morbi.
          </p>

          <div className="flex mt-7">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="text-white border border-white w-56 h-12 px-4 bg-transparent"
            />
            <button className="bg-orange-500 h-12 w-14 flex items-center justify-center hover:bg-white hover:text-orange-500 ">
              <IoIosSend />
            </button>
          </div>
        </div>

      
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-3 text-sm mt-10 md:mt-0">
          
          <ul className="space-y-2">
            <li>
              <h2 className="mb-2 font-bold">INFORMATION</h2>
            </li>
            <li><a href="#">About Team</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservation</a></li>
            <li><a href="#">Review</a></li>
            <li><a href="#">Our Method</a></li>
          </ul>

          
          <ul className="space-y-2">
            <li>
              <h2 className="mb-2 font-bold">BEST PRODUCTS</h2>
            </li>
            <li><a href="#">Coffee & Tea</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Bakery</a></li>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">Our Method</a></li>
          </ul>

          
          <ul className="space-y-2 w-[200px]">
            <li>
              <h2 className="mb-2 font-bold">CONTACT</h2>
            </li>
            <li><a href="#">Phone: 123456789</a></li>
            <li><a href="#">Email: rishika@gmail.com</a></li>
            <li><a href="#">Address: Lahartara Varanasi</a></li>
            <li><a href="#">Review</a></li>
          </ul>

          
          <ul className="space-y-2">
            <li>
              <h2 className="mb-2 font-bold">OPENING HOURS</h2>
            </li>
            <li><a href="#">Saturday at 9:00</a></li>
            <li><a href="#">Sunday at 9:00</a></li>
            <li><a href="#">Monday at 9:00</a></li>
            <li><a href="#">Friday at 9:00</a></li>
            <li><a href="#">Our Method</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
