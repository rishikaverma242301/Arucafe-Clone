import React from 'react'

const Fifth = () => {
  return (
    <div className='mt-20' data-aos="fade-up">
      <h5 className='text-orange-500 text-center'>SHOP WITH US</h5>
      <h1 className='text-amber-950 text-center text-3xl sm:text-4xl mt-4 font-semibold'>Popular Products</h1>
      <p className='text-center mt-6 mb-10 text-sm sm:text-base'>
        Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expet endis <br />
        in mei. Mei an at dictum lacu pericula uni euripidis.
      </p>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 px-6 sm:px-0'>
        <div className='bg-[#F8F3ED] p-4'>
          <img src="/image/51.png" alt="" className='w-40 h-40 mx-auto mt-4'/>
          <h6 className='text-center mt-2'>Incredible Aluminum Bag</h6>
          <p className='text-center'>$881.37 $800.26</p>
        </div>
        <div className='bg-[#F8F3ED] p-4'>
          <img src="/image/52.png" alt="" className='w-40 h-40 mx-auto mt-4'/>
          <h6 className='text-center mt-2'>Synergistic Aluminum Lamp</h6>
          <p className='text-center'>$818.26</p>
        </div>
        <div className='bg-[#F8F3ED] p-4'>
          <img src="/image/53.png" alt="" className='w-40 h-40 mx-auto mt-4'/>
          <h6 className='text-center mt-2'>Lightweight Concrete Clock</h6>
          <p className='text-center'>$336.97 - $917.33</p>
        </div>
        <div className='bg-[#F8F3ED] p-4'>
          <img src="/image/54.png" alt="" className='w-40 h-40 mx-auto mt-4'/>
          <h6 className='text-center mt-2'>Ergonomic Aluminum Small</h6>
          <p className='text-center'>$59.43</p>
        </div>
        <div className='bg-[#F8F3ED] p-4'>
          <img src="/image/55.png" alt="" className='w-40 h-40 mx-auto mt-4'/>
          <h6 className='text-center mt-2'>Sleek Aluminum Bench</h6>
          <p className='text-center'>$274.16</p>
        </div>
        <div className='bg-[#F8F3ED] p-4'>
          <img src="/image/56.png" alt="" className='w-40 h-40 mx-auto mt-4'/>
          <h6 className='text-center mt-2'>Heavy Duty Plastic Watch</h6>
          <p className='text-center'>$300.69</p>
        </div>
        <div className='bg-[#F8F3ED] p-4'>
          <img src="/image/57.png" alt="" className='w-40 h-40 mx-auto mt-4'/>
          <h6 className='text-center mt-2'>Intelligent Plastic Gloves</h6>
          <p className='text-center'>$838.55</p>
        </div>
        <div className='bg-[#F8F3ED] p-4'>
          <img src="/image/58.png" alt="" className='w-40 h-40 mx-auto mt-4'/>
          <h6 className='text-center mt-2'>Enormous Plastic Car</h6>
          <p className='text-center'>$252.84</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 mt-10">
        <button className="border border-black bg-orange-500 hover:bg-white hover:text-orange-500 text-white w-44 h-12">
          View All
        </button>
      </div>
    </div>
  )
}

export default Fifth;
