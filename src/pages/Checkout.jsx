import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { clearCheckout } from '../features/checkout/CheckoutSlice';
import { addOrder } from '../features/myorder/MySlice';

function Checkout() {
  const dispatch = useDispatch();

  // Get all items added for checkout
  const checkoutFood = useSelector((state) => state.checkout.checkoutItem);

  // Calculate final total amount
  const sum = checkoutFood.reduce((total, item) => total + (item.price * item.qty), 0);

  // Check if checkout list contains items
  const optionHid = checkoutFood.length > 0;

  return (
    <div className="p-6">

      {/* Checkout Page Header */}
      <div className='flex items-center justify-between'>
        <h1 className=' text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-[#57534e]'>Checkout</h1>

        {/* Clear all checkout items */}
        <i 
          onClick={() =>dispatch(clearCheckout(checkoutFood)) }
          class='bxr text-xl md:text-2xl lg:text-3xl text-[#ef4444] bx-trash hover:text-[#f87171] rounded-md'
        ></i>
      </div>

      {/* If no items are available → Show Empty Message */}
      {checkoutFood.length === 0 ? (
        <div className='flex justify-center items-center h-screen'>
          <p className='text-4xl text-gray-400'>No items in Checkout</p>
        </div>
      ) : (
        
        /* Show each food item in checkout */
        checkoutFood.map((item) => (
          <div key={item.id} className='block md:flex lg:flex gap-5 items-center border-[#ef4444] border-2 p-3 rounded-2xl my-2 shadow-lg'>
            {/* Food Image */}
            <img className='w-20 h-20  border-2 rounded-2xl border-[#ef4444]' src={item.image} alt="" />

            {/* Food Name & Hotel */}
            <div className='flex gap-20 md:gap-30 lg:gap-122 py-3 md:py-0 lg:py-0'>
              <h3>{item.name}<span className='border ml-1 md:ml-0 lg:ml-0 p-0.5 text-center'>x{item.qty}</span></h3>
              <p className='text-[#f87171]'>{item.hotel}</p>
            </div>

            {/* Individual Total Price */}
            <p className='ml-auto py-4 md:py-0 lg:py-0  '>Total price: ₹{item.qty*item.price}</p>
          </div>
        ))
      )}

      {/* Payment selection title */}
      <h2 hidden={!optionHid} className='text-2xl font-bold py-7 text-[#57534e]'>Payment Mode:</h2>

      {/* Payment Options Section */}
      <div hidden={!optionHid} className='py-4'>
        <fieldset className="space-y-3">

          {/* Cash on Delivery Option */}
          <label htmlFor="DeliveryStandard" className="flex items-center justify-between gap-4 rounded border border-gray-300 bg-white p-3 text-sm font-medium shadow-sm hover:bg-gray-50">
            <p className="text-gray-700">Cash on Delivery</p>
            <input type="radio" name="DeliveryOption" id="DeliveryStandard" className="size-5 border-gray-300" defaultChecked />
          </label>

          {/* Online Payment Option */}
          <label htmlFor="DeliveryPriority" className="flex items-center justify-between gap-4 rounded border border-gray-300 bg-white p-3 text-sm font-medium shadow-sm hover:bg-gray-50">
            <p className="text-gray-700">Pay Online</p>
            <input type="radio" name="DeliveryOption" id="DeliveryPriority" className="size-5 border-gray-300" />
          </label>

        </fieldset>
      </div>

      {/* Total Price Display */}
      <div hidden={!optionHid} className='flex gap-20 py-5'>
         <p>Amount to be paid:  ₹{sum}</p>
      </div>

      {/* Place Order Button */}
      <div hidden={!optionHid} className='flex justify-end'>
        <Link to='/order'>
         <button 
            onClick={()=>{
              dispatch(addOrder(checkoutFood)); // Save order
              dispatch(clearCheckout(checkoutFood)); // clear checkout data after order
            }} 
            className='flex items-center hover:bg-[#f87171] bg-[#ef4444] p-1.5 rounded-md text-[white]'
          >
            Place Order
         </button>
        </Link>
      </div>

    </div>
  )
}

export default Checkout;
