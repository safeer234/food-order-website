import React from 'react'
import { clearCart } from '../features/cart/CartSlice';
import { incrementItem, decrementItem } from '../features/item/ItemSlice';
import {useDispatch, useSelector } from 'react-redux'
function Cart() {
  const dispatch = useDispatch()
  const cartFoods = useSelector((state)=> state.cart.cartItems); 
  const countItem = useSelector((state)=> state.items.value)
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
            <h3>{item.name} (x{countItem})</h3>
            <p className='ml-240'>Price: {item.price}</p>
            <div className=' flex px-5 gap-3'>
               <button onClick={()=> dispatch(incrementItem())} className=' w-11 h-11 rounded-[410px] text-white text-lg bg-[#ef4444] duration-200 ease-in hover:bg-[#f87171]'>+</button>
             <button onClick={()=> dispatch(decrementItem())} className=' w-10 h-10 rounded-[410px] text-white text-2xl text-center bg-[#ef4444] duration-200 ease-in hover:bg-[#f87171]'>-</button>
            

            </div>
           
     

          </div>
         
              
            </div>
         
    
        ))
      )}
       <div className='flex gap-20 py-5'>
         <p>Total count: {cartFoods.length}</p>
         <div className='px-90'>
          <button onClick={() =>dispatch(clearCart()) } className='bg-[#ef4444] duration-200 ease-in hover:bg-[#f87171] text-[white] p-1  text-center rounded-md w-20'>Clear All</button>
          

         </div>
         

      </div>
      


    </div>
  )
}

export default Cart
