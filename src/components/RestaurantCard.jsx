import React from 'react'

function RestaurantCard(prop) {
  return (
    <div>
        <div className='flex items-center'>
               <img className='w-30 lg:w-60 md:w-60 h-30 object-cover rounded-s-2xl ' src={prop.restaurant.image} alt="" />
               <div className='text-center px-5'>
                <h3 className='px-2 py-2 text-2xl text-[#57534e] font-medium'>{prop.restaurant.name}</h3>
                 <p className='py-2 px-2 text-[#f87171]'><i className='bx text-2xl bx-location'></i> {prop.restaurant.location}</p>

               </div>
            
           
           
            </div>
    </div>
  )
}

export default RestaurantCard
