import React from 'react'

function FoodcCircles(props) {
  return (
    <div >
      <div className=' cursor-pointer  '>
         <img className=' duration-200 ease-in-out border-5 p-1 rounded-[410px] w-15 h-15 border-[#ef4444] hover:border-2' src={props.foodCircle.image} alt="" />

      </div>
     
      <div className='mt-2 '>
        <p className='text-[#57534e] hover:text-[#ef4444] cursor-pointer'>{props.foodCircle.name}</p>

      </div>
      
    </div>
  )
}

export default FoodcCircles
