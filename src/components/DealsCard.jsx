import React from 'react'
import {  useDispatch } from 'react-redux'
import { addFood } from '../features/cart/CartSlice'
function DealsCard(prop) {
  const dispatch = useDispatch()
  return (
    <div className='snap-x'>
      <div className='snap-center'>
         <img className='w-80 h-70  rounded-3xl' src={prop.deal.image} alt="" />
      <h3>{prop.deal.name}</h3>
      <div className='flex gap-41 px-4 py-3'>
         <p>{prop.deal.price}</p>
      <button onClick={()=> dispatch(addFood(prop.deal))} className=' cursor-pointer duration-300 ease-out hover:bg-[#f87171] text-center bg-[#ef4444] text-[white] p-1 rounded-lg w-30'>Add</button>
      
        
      </div>

      </div>
     
     
    </div>
  )
}

export default DealsCard
