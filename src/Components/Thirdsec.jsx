import React from 'react';

const Third = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row mt-14 px-4" data-aos="fade-up">
      
      <div className="text-left mb-8 md:mb-0 md:w-1/2">
        <h5 className="text-orange-500 mb-6 text-3xl ml-10 text-center md:text-left">TEA</h5>
        <ul className="space-y-6 ml-0 md:ml-8">
          <li>
            <div className="flex justify-between">
              <h1 className="font-medium text-lg sm:text-base">
                Forest Black Tea--------------------------------$20.00
              </h1>
            </div>
            <p className="text-amber-950">Condensed Milk, Ice cubes, Espresso.</p>
          </li>

          <li>
            <div className="flex justify-between items-center">
              <h1 className="font-medium text-lg sm:text-base">
                Black Milk Tea--------------------------------$26.00
              </h1>
            </div>
            <p className="text-amber-950">Fresh brewed coffee and steamed milk.</p>
          </li>

          <li>
            <div className="flex justify-between items-center">
              <h1 className="font-medium text-lg sm:text-base">
                Strawberry Oolong Tea----------------------$30.00
              </h1>
            </div>
            <p className="text-amber-950">Espresso, vanilla-flavored syrup, and milk.</p>
          </li>

          <li>
            <div className="flex justify-between items-center">
              <h1 className="font-medium text-lg sm:text-base">
                Red Sunset--------------------------------$32.00
              </h1>
            </div>
            <p className="text-amber-950">Fresh brewed coffee and espresso.</p>
          </li>

          <li>
            <div className="flex justify-between items-center">
              <h1 className="font-medium text-lg sm:text-base">
                Choco Almond Crunch----------------------$26.00
              </h1>
            </div>
            <p className="text-amber-950">Smoothened layer of foam.</p>
          </li>
        </ul>
      </div>

      <div className="flex justify-center md:w-1/2">
        <img src="/image/3.png" alt="Tea" className="w-64 h-64 sm:w-72 sm:h-72 md:w-auto md:h-auto" />
      </div>
    </div>
  );
};

export default Third;
