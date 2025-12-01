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
        <h1 className=' text-xl  md:text-2xl lg:text-3xl font-bold mb-7 md:mb-4 lg:mb-4 px-6 md:px-0 lg:px-0 text-[#57534e]'>Cart</h1>
        <i onClick={() => dispatch(clearCart(cartFoods))} class='bxr text-xl md:text-2xl lg:text-2xl text-[#ef4444] mr-10 sm:mr-5 md:mr-0 lg:md-0 bx-trash hover:text-[#f87171] rounded-md'></i>
      </div> 

      {/* EMPTY CART MESSAGE */}
       {cartFoods.length === 0 ? (
        <div className='flex justify-center items-center h-screen inset-0'>
          <p className=' text-4xl md:text-6xl lg:text-6xl text-[#d6d3d1]'> cart is empty</p>
        </div>
      ) : ( 

      /* CART ITEM LIST */
         cartFoods.map((item) => (
          <div key={item.id} className='px-6 md:px-0 lg:px-0'>
            <div className='block sm:block md:block lg:flex items-center rounded-2xl border-3 shadow-2xl p-3 w-80 sm:w-90 md:w-184 lg:w-370 h-69  md:h-60 lg:h-30  my-2 border-[#ef4444]'>
              <img className='w-39 md:w-55 lg:w-25 h-21 md:h-26 lg:h-20  border-2 rounded-2xl border-[#ef4444]' src={item.image} alt="" />
              
              <div className='flex  gap-30  md:gap-20 lg:gap-20 py-6 md:py-0 lg:py-0'>
                <div className='px-0 md:px-2 lg:px-5 py-0 md:py-2 lg:py-0 '>
                  <h3>{item.name} <span className='border p-0.5 text-center'>x{item.qty}</span></h3>
                </div>
                <div>
                  <p className='text-[#f87171] ml-0 md:ml-99 lg:ml-0'>{item.hotel}</p>
                </div>
              </div>
              <div className='ml-50 md:ml-139 lg:ml-230 mt-1 md:mt-0 lg:mt-0  '>
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
       <div hidden={!proceedHid} className='flex gap-20 py-5 px-8 md:px-3 lg:px-3 mb-13 md:mb-0 lg:mb-0'>
        <p>Final Amount: ₹{sum}</p>
      </div> 

      {/* CHECKOUT BUTTON */}
       <div className='flex justify-end'>
        <Link to='/checkout'>
          <button hidden={!proceedHid} onClick={() => dispatch(addCheckout(cartFoods))} className='flex items-center hover:bg-[#f87171] bg-[#ef4444] p-1.5 rounded-md text-white mr-6 md:mr-0 lg:mr-0'>
            Proceed to Checkout
          </button>
        </Link>
      </div> 

    </div>
  )
}

export default Cart
