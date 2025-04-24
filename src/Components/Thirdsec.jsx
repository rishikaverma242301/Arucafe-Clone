import React from 'react'

const Third = () => {
  return (
    <div className=' flex mt-14' data-aos="fade-up">
        <div className='text-Left'>
            <h5 className='text-orange-500 mb-6 text-3xl text-center'>TEA</h5>
            <ul className='space-y-6 ml-8'>
              <li>
              <div className='flex '>
              <h1 className='font-medium text-lg'>
              Forest Black Tea--------------------------------$20.00
              </h1>
              </div>
              <p className='text-amber-950'>Condensed Milk, Ice cubs, Espresso.</p></li>

              <li>
                <div className='flex justify-between items-center'>
                  <h1 className='font-medium text-lg'>Black Milk Tea
                  --------------------------------$26.00
              </h1></div>
              <p className='text-amber-950'>Fresh bewed coffee and steamed milk.</p></li>

              <li>
                <div className='flex justify-between items-center'><h1 className='font-medium text-lg'>Strawberry Olong Tea
                ------------------------------$30.00</h1>
                </div>   <p className='text-amber-950'>Espresso, vanilla-flavored syrup and milk.</p></li>

              <li>
                <div className='flex justify-between items-center'><h1 className='font-medium text-lg'> Red Sunset

              --------------------------------$32.00</h1></div>
              <p className='text-amber-950'>Fresh bewed coffee and espresso.</p></li>

              <li>
                <div className='flex justify-between items-center '><h1 className='font-medium text-lg'>Choco Almond Crunch----------------------------$26.00</h1>
                </div><p className='text-amber-950'>Smoothened layer of foam.</p></li>
            </ul>
          </div>
        
          <div className='flex flex-col h-[80%] w-[50%] ml-5 justify-end'>
            <img src="/image/3.png" alt="" />
          </div>

                </div>

    
  )
}

export default Third
