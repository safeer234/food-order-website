import React from 'react'
import { clearCart } from '../features/cart/CartSlice';
import {useDispatch, useSelector } from 'react-redux'
function Cart() {
  const dispatch = useDispatch()
  const cartFoods = useSelector((state)=> state.cart.cartItems); 
  return (
    <div className='p-4'>
      <h1 className='text-3xl font-bold mb-4'>Cart</h1>
      {cartFoods.length === 0 ? (
        <div>
           <p> cart is empty</p>

        </div>
       
      ):(
        cartFoods.map((item)=>(
          <div>
             <div key={item.id} className=' flex gap-5 items-center rounded-2xl border-3 shadow-2xl p-3 w-370 h-30 my-2 border-[#ef4444]'>
            <img className='w-20  h-20' src={item.image} alt="" />
            <h3>{item.name}(x1)</h3>
            <p className='ml-240'>Price: {item.price}</p>
            
            
     

          </div>
         
              
            </div>
         
    
        ))
      )}
       <div className='flex gap-20 py-5'>
         <p>Total count: {cartFoods.length}</p>
         <div className='px-90'>
          <button onClick={() =>dispatch(clearCart()) } className='bg-[#ef4444] duration-200 ease-in hover:bg-[#fca5a5] text-[white] p-1  text-center rounded-md w-20'>Clear All</button>

         </div>
         

      </div>
      


    </div>
  )
}

export default Cart
