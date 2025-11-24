import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { clearCheckout } from '../features/checkout/CheckoutSlice';
import { addOrder } from '../features/myorder/MySlice';
function Checkout() {
  const dispatch = useDispatch()
  const checkoutFood = useSelector((state) => state.checkout.checkoutItem);
const sum = checkoutFood.reduce((total, item) => total+(item.price * item.qty), 0); 
  return (
    <div className="p-6">
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold mb-4 text-[#57534e]'>Checkout</h1>
        </div>

        <div>
          <i onClick={() =>dispatch(clearCheckout(checkoutFood)) }  class='bxr text-2xl text-[#ef4444]  bx-trash hover:text-[#f87171] rounded-md'></i> 


        </div>

      </div>
      
      {checkoutFood.length === 0 ? (
        <div className='flex justify-center items-center h-screen'>
          <p className='text-4xl text-gray-400'>No items in Checkout</p>
        </div>
      ) : (
        checkoutFood.map((item) => (
          <div key={item.id} className='flex gap-5 items-center border p-3 rounded-lg my-2 shadow-lg'>
            <img className='w-20 h-20 rounded-lg' src={item.image} alt="" />
            <h3 className='font-semibold'>{item.name}(x{item.qty})</h3>
            <p className='ml-auto font-bold'>Total price: ₹{item.qty*item.price}</p>
          </div>
        ))
      )}
      <h2 className='text-2xl font-bold  py-7 text-[#57534e]'>Payment Mode:</h2>
      {/* payment mode */}
    <div className='py-4'>
  <fieldset className="space-y-3">
    <legend className="sr-only">Delivery</legend>

    <div>
      <label htmlFor="DeliveryStandard" className="flex items-center justify-between gap-4 rounded border border-gray-300 bg-white p-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 has-checked:border-blue-600 has-checked:ring-1 has-checked:ring-blue-600">
        <div>
          <p className="text-gray-700">Cash on Delivery</p>
          <p className="text-gray-900"></p>
        </div>

        <input type="radio" name="DeliveryOption" value="DeliveryStandard" id="DeliveryStandard" className="size-5 border-gray-300" defaultChecked />
      </label>
    </div>

    <div>
      <label htmlFor="DeliveryPriority" className="flex items-center justify-between gap-4 rounded border border-gray-300 bg-white p-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 has-checked:border-blue-600 has-checked:ring-1 has-checked:ring-blue-600">
        <div>
          <p className="text-gray-700">Pay Online</p>
          <p className="text-gray-900"></p>
        </div>

        <input type="radio" name="DeliveryOption" value="DeliveryPriority" id="DeliveryPriority" className="size-5 border-gray-300" />
      </label>
    </div>
  </fieldset>

  <span id="PING_IFRAME_FORM_DETECTION" style={{ display: "none" }}></span>
</div>

      {/* payment mode */}
      <div className='flex gap-20 py-5'>
         <p>Amount to be paid:  ₹{sum}</p>
        

      </div>

       <div className='flex justify-end'>
        <Link to='/order'>
         <button onClick={()=>{dispatch(addOrder(checkoutFood));dispatch(clearCheckout(checkoutFood))}} className='flex items-center hover:bg-[#f87171] bg-[#ef4444] p-1.5 rounded-md text-[white]'>Place Order</button>

        </Link>
       
      </div>
    </div>
  )
}

export default Checkout;
