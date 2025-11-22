import React from 'react'
import { clearCart } from '../features/cart/CartSlice';
import { incrementItem, decrementItem } from '../features/item/ItemSlice';
import {useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { addCheckout } from '../features/checkout/CheckoutSlice';
function Cart() {
  const dispatch = useDispatch()
  const cartFoods = useSelector((state)=> state.cart.cartItems); 
  const countItem = useSelector((state)=> state.items.value);
 
  return (
    <div className='p-4'>
      <div className='flex items-center justify-between'>
        <div>
           <h1 className='text-3xl font-bold mb-4 text-[#57534e]'>Cart</h1>

        </div>
        

        <div>
          <i onClick={() =>dispatch(clearCart(cartFoods)) }  class='bxr text-2xl text-[#ef4444]  bx-trash hover:text-[#f87171] rounded-md'></i> 

        </div>


      </div>
     
      {cartFoods.length === 0 ? (
        
        
        <div className='flex justify-center items-center h-screen inset-0'>
          
           <p className='text-6xl text-[#d6d3d1]'> cart is empty</p>

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
         
          

         </div>
         

      </div>

      <div className='flex justify-end'>
        <Link to='/checkout'>
         <button onClick={()=> dispatch(addCheckout(cartFoods))} className='flex items-center hover:bg-[#f87171] bg-[#ef4444] p-1.5 rounded-md text-[white]'>Proceed to Checkout</button>

        </Link>
       
      </div>
      


    </div>
  )
}

export default Cart
