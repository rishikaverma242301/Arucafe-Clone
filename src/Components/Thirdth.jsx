import React from 'react'

const Third = () => {
  return (
    <div className=' mt-20' data-aos="fade-up">
     
      <div className='grid md:grid-cols-2 gap-10 items-start'>
        
          <div className='h-[120%] bg-no-repeat bg-cover bg-right flex items-center pl-8'style={{backgroundImage:'url("/image/331.png")',backgroundPosition:'right',backgroundSize:'70%'}} >
            <img src="/image/332.png" alt="" className='w-64 h-64' />
          </div>

          <div className='text-left'>
            <h5 className='text-orange-500 mb-6 text-3xl'>BAKERY</h5>
            <ul className='space-y-6'>
              <li>
              <div className='flex justify-between items-center'>
              <h1 className='font-medium text-lg'>
              Colombia Dark Roast--------------------------------$20.00
              </h1>
              </div>
              <p className='text-amber-950'>Condensed Milk, Ice cubs, Espresso.</p></li>

              <li>
                <div className='flex justify-between items-center'>
                  <h1 className='font-medium text-lg'>White Chocolate Mocha--------------------------------$26.00
              </h1></div>
              <p className='text-amber-950'>Fresh bewed coffee and steamed milk.</p></li>

              <li>
                <div className='flex justify-between items-center'><h1 className='font-medium text-lg'>Iced Caramel Latte--------------------------------$30.00</h1>
                </div>   <p className='text-amber-950'>Espresso, vanilla-flavored syrup and milk.</p></li>

              <li>
                <div className='flex justify-between items-center'><h1 className='font-medium text-lg'> Espresso Machiato
              --------------------------------$32.00</h1></div>
              <p className='text-amber-950'>Fresh bewed coffee and espresso.</p></li>

              <li>
                <div className='flex justify-between items-center'><h1 className='font-medium text-lg'>Capuchino--------------------------------$26.00</h1>
                </div><p className='text-amber-950'>Smoothened layer of foam.</p></li>
            </ul>
          </div>


        </div>
        <div className='flex justify-center items-center  w-[100%] h-12 mt-32'>
       <button className='bg-orange-500 text-white w-54 h-12 '>See All Menu -</button>
      </div>
       
       </div>

    
  )
}

export default Third
