import React, { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

const Second = () => {
  useEffect(() => {
    AOS.init({
    duration:2000,
  })
},
  []);
  return (
    <div data-aos="fade-up">
      <div className="text-black text-center mt-14">
        <h6 className="text-orange-400 mt-24 mb-4"  >VISIT OUR STORE</h6>
        <h2 className="text-amber-950 text-5xl mb-6"  >Few Word About Us</h2>
        <p >
          A charming neighbourhood restaurant and bar, located in the heart of
          the city; a true <br />
          gateway to gourmet farm-to-table dining, inspired by seasonal produce.
        </p>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 justify-center px-8 gap-3 mt-10 " >
        <div className="border border-black text-center w-80 h-60">
          <img src="/image/21.jpg" alt="" className=" w-80 h-60" />
        </div>
        <div className="border border-black text-center w-80 h-60">
          <img src="/image/22.jpg" alt="" className=" w-80 h-60" />
        </div>
        <div className="border border-black text-center w-80 h-60">
          <img src="/image/23.jpg" alt="" className=" w-80 h-60" />
        </div>
      </div>
    </div>
  );
};

export default Second;
