import React from 'react';

const Seventh = () => {
  return (
    <div data-aos="fade-up" className="px-4">
      <h5 className="text-orange-500 text-center mt-24">UPDATE INFORS</h5>
      <h1 className="text-amber-950 text-center text-4xl sm:text-3xl mt-4 mb-14">Our Latest Articles</h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 mt-14">
        <div><img src="/image/61.jpeg" alt="" className="w-full h-auto object-cover" /></div>
        <div><img src="/image/62.jpeg" alt="" className="w-full h-auto object-cover" /></div>
        <div><img src="/image/63.jpeg" alt="" className="w-full h-auto object-cover" /></div>
      </div>

      
      <div className="flex flex-col lg:flex-row items-center gap-8 mb-10 mt-24" data-aos="fade-up">
        <img src="/image/67.png" alt="" className="w-110 max-w-md h-auto object-contain" />
        <div>
          <h6 className="text-orange-500 mt-5">OUR STORY</h6>
          <h1 className="text-amber-950 text-3xl sm:text-4xl mt-2">How We Made Coffee</h1>

          <div className="mt-5">
            <h2 className="text-2xl">Organic coffee seed</h2>
            <p className="text-gray-500">Lectus vestibulum mattis ullamcorperen velit sed ullam<br />corper morbi. Felis imperdiet proin fermentum leo.</p>
          </div>

          <div className="mt-5">
            <h2 className="text-2xl">Italy modern machine</h2>
            <p className="text-gray-500">Alienum phaedrum torquatos nec eu, vis detraxit periculis<br />ex, nihil expet endis in mei.</p>
          </div>

          <div className="mt-5">
            <h2 className="text-2xl">Best traditional flavors</h2>
            <p className="text-gray-500">A charming neighbourhood restaurant and bar, located in<br />the heart of the city; a true gateway to gourmet</p>
          </div>
        </div>
      </div>

      
      <div className="flex justify-center mb-10">
        <button className="w-44 h-12 bg-orange-500 text-white hover:bg-white hover:text-orange-500 border border-orange-500 transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Seventh;
