import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { clearOrders } from '../features/myorder/MySlice';
function Myorders() {
  const dispatch = useDispatch()
  const myFood = useSelector((state) => state.myOrder.orders);
const sum = myFood.reduce((total, item) => total+(item.price * item.qty), 0);
const amountHid = useSelector((state) => state.myOrder.orders.length>0); 
  return (
    <div className="p-6">
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold mb-4 text-[#57534e]'>My Orders</h1>
        </div>

        <div>
          <i onClick={() =>dispatch(clearOrders(myFood)) }  class='bxr text-2xl text-[#ef4444]  bx-trash hover:text-[#f87171] rounded-md'></i> 


        </div>

      </div>
      
      {myFood.length === 0 ? (
        <div className='flex justify-center items-center h-screen'>
          <p className='text-4xl text-gray-400'>No items in Orders</p>
        </div>
      ) : (
        myFood.map((item) => (
          <div key={item.id} className='flex gap-20 items-center border p-3 rounded-lg my-2 shadow-lg'>
            <img className='w-20 h-20 rounded-lg' src={item.image} alt="" />
            <h3 className='font-semibold'>{item.name}(x{item.qty})</h3>
            <p className='ml-auto font-bold'>Total price: ₹{item.qty*item.price}</p>
            <div className='flex gap-1 items-center'>
              <p className='bg-[#fca5a5] w-2 h-2 rounded-2xl'></p>
              <p>Food processing</p>

            </div>
            
            <button className='flex items-center hover:bg-[#f87171] bg-[#ef4444] p-1.5 rounded-md text-[white]'>Track Order</button>
          </div>
        ))
      )}
      <div hidden={!amountHid} className='flex gap-20 py-5'>
         <p>Amount to be paid:  ₹{sum}</p>
        

      </div>

      
       
      </div>
    
  )
}

export default Myorders;
