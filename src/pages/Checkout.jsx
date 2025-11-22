import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Checkout() {
  const checkoutFood = useSelector((state) => state.checkout.checkoutItem);

  return (
    <div className="p-6">
      <h1 className='text-3xl font-bold mb-4 text-[#57534e]'>Checkout</h1>
      {checkoutFood.length === 0 ? (
        <div className='flex justify-center items-center h-screen'>
          <p className='text-4xl text-gray-400'>No items in Checkout</p>
        </div>
      ) : (
        checkoutFood.map((item) => (
          <div key={item.id} className='flex gap-5 items-center border p-3 rounded-lg my-2 shadow-lg'>
            <img className='w-20 h-20 rounded-lg' src={item.image} alt="" />
            <h3 className='font-semibold'>{item.name}</h3>
            <p className='ml-auto font-bold'>{item.price}</p>
          </div>
        ))
      )}

       <div className='flex justify-end'>
        <Link>
         <button  className='flex items-center hover:bg-[#f87171] bg-[#ef4444] p-1.5 rounded-md text-[white]'>Place Order</button>

        </Link>
       
      </div>
    </div>
  )
}

export default Checkout;
