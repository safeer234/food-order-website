import React from 'react'
import { clearCart, incrementItem, decrementItem } from '../features/cart/CartSlice';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { addCheckout } from '../features/checkout/CheckoutSlice';

function Cart() {
  const dispatch = useDispatch();
  const cartFoods = useSelector((state) => state.cart.cartItems);
  const sum = cartFoods.reduce((total, item) => total + (item.price * item.qty), 0);
  const proceedHid = useSelector((state) => state.cart.cartItems.length > 0);

  console.log(cartFoods);

  return (
    <div className='p-0 sm:p-0 md:p-4 lg:p-4 py-9 sm:py-9 md:py-0 lg-py-0 '>

      {/* CART HEADER */}
       <div className='flex items-center justify-between md:justify-between lg:justify-between'>
        <h1 className='text-3xl font-bold mb-4 text-[#57534e]'>Cart</h1>
        <i onClick={() => dispatch(clearCart(cartFoods))} class='bxr text-2xl text-[#ef4444] mr-5 sm:mr-5 md:mr-0 lg:md-0 bx-trash hover:text-[#f87171] rounded-md'></i>
      </div> 

      {/* EMPTY CART MESSAGE */}
       {cartFoods.length === 0 ? (
        <div className='flex justify-center items-center h-screen inset-0'>
          <p className='text-6xl text-[#d6d3d1]'> cart is empty</p>
        </div>
      ) : ( 

      /* CART ITEM LIST */
         cartFoods.map((item) => (
          <div key={item.id}>
            <div className='block sm:block md:block lg:flex items-center rounded-2xl border-3 shadow-2xl p-3 w-90 sm:w-90 md:w-184 lg:w-370 h-65  md:h-60 lg:h-30 my-2 border-[#ef4444]'>
              <img className='w-20 h-20 border-2 rounded-2xl border-[#ef4444]' src={item.image} alt="" />
              
              <div className='flex  gap-30  md:gap-20 lg:gap-20 py-6 md:py-0 lg:py-0'>
                <div className='px-0 md:px-5 lg:px-5 '>
                  <h3>{item.name} <span className='border p-0.5 text-center'>x{item.qty}</span></h3>
                </div>
                <div>
                  <p className='text-[#f87171]'>{item.hotel}</p>
                </div>
              </div>
              <div className='ml-50 md:ml-40 lg:ml-230 mt-1 md:mt-0 lg:mt-0  '>
                <p >TotalPrice: ₹{item.qty * item.price}</p>

              </div>

              

              <div className='flex px-0 md:px-5   w-30 sm:w-30 md:w-40 lg:w-40 lg:px-5 gap-3'>
                <button onClick={() => dispatch(incrementItem(item.id))} className='w-11 h-11 rounded-[410px] text-white text-lg bg-[#ef4444] hover:bg-[#f87171]'>+</button>
                <button onClick={() => dispatch(decrementItem(item.id))} className='w-11 h-11 rounded-[410px] text-white text-2xl bg-[#ef4444] hover:bg-[#f87171]'>-</button>
              </div>
            </div>
          </div>
        ))
      )} 

      {/* FINAL AMOUNT */}
       <div hidden={!proceedHid} className='flex gap-20 py-5'>
        <p>Final Amount: ₹{sum}</p>
      </div> 

      {/* CHECKOUT BUTTON */}
       <div className='flex justify-end'>
        <Link to='/checkout'>
          <button hidden={!proceedHid} onClick={() => dispatch(addCheckout(cartFoods))} className='flex items-center hover:bg-[#f87171] bg-[#ef4444] p-1.5 rounded-md text-white'>
            Proceed to Checkout
          </button>
        </Link>
      </div> 

    </div>
  )
}

export default Cart
