import React from 'react'

const Seventh = () => {
  return (
    <div data-aos="fade-up">
      <h5 className='text-orange-500 text-center mt-24'>UPDATE INFORS</h5>
      <h1 className='text-amber-950 text-center text-4xl mt-4 mb-14 sm:text-3xl'>Our Latest Articles</h1>
      <div className='grid grid-cols-1 sm:grid-cols-3 mb-8 gap-3 h-80 ml-5'>     
      <div><img src="/image/61.jpeg" alt=""  /></div>
      <div><img src="/image/62.jpeg" alt="" /></div>
      <div><img src="/image/63.jpeg" alt="" /></div>
      </div>

<div className='flex ml-5'>
    <img src="/image/67.png" alt="" className='w-110 h-120'/>
    <div className='ml-14'>
      <h6 className='text-orange-500 mt-5'>OUR STORY</h6>
      <h1 className='text-amber-950 text-4xl mt-5'>How We Made Coffee</h1>
      <h2 className='mt-5 text-2xl'>Organic coffee seed</h2>
      <p className='text-gray-500'>Lectus vestibulum mattis ullamcorperen velit sed ullam <br /> corper morbi. Felis imperdiet proin fermentum leo.</p>
      <h2 className='mt-5 text-2xl'>Italy modern machine</h2>
      <p className='text-gray-500'>Alienum phaedrum torquatos nec eu, vis detraxit periculis <br /> ex, nihil expet endis in mei.</p>
      <h2  className='mt-5 text-2xl'>Best traditional flavors</h2>
      <p className='text-gray-500'>A charming neighbourhood restaurant and bar, located in <br />the heart of the city; a true gateway to gourmet</p>
    </div>

  </div>
  <div className='flex justify-center ml-34 -mt-10'>
<button className='w-44 h-12 bg-orange-500 text-white hover:bg-white hover:text-orange-500'>Read More</button>
</div>
   </div>
  )
}

export default Seventh
