import React from 'react'

const Third = () => {
  return (
    <div className='text-center' data-aos="fade-up">
      <h6 className='text-orange-500 mt-24 mb-4'>EXPLORE THE TASTE</h6>
      <h2 className='text-amber-950 text-4xl font-medium mb-8'>Our Flavor Menus</h2>
     
      <div className='grid md:grid-cols-2 gap-10 items-start  h-[120vh] justify-end '>
        
          <div className='h-[100%] bg-no-repeat bg-cover bg-right  flex items-center pl-8' style={{backgroundImage:'url("/image/31.png")', backgroundPosition:"right", backgroundSize:"70%"}}>
            <img src="/image/32.png" alt="" className='w-64 h-64 ' />
          </div>

          <div className='text-left '>
            <h5 className='text-orange-500 mb-6 text-3xl'>COFFEE</h5>
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
        
      </div>

    
  )
}

export default Third
