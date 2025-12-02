import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { clearOrders } from '../features/myorder/MySlice';
import { trackOrder } from '../features/track/TrackSlice';

function Myorders() {
  const dispatch = useDispatch()
  const myFood = useSelector((state) => state.myOrder.orders);
const sum = myFood.reduce((total, item) => total+(item.price * item.qty), 0);
const amountHid = useSelector((state) => state.myOrder.orders.length>0); 
  return (
    <div className="p-6">
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold mb-4 text-[#57534e]'>My <span className='text-[#ef4444]'>Orders</span></h1>
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
          <div key={item.id} className=' block md:block lg:flex gap-20 items-center h-66 md:h-69 lg:h-26 border-[#57534e] border p-3 rounded-2xl my-2 shadow-lg'>
            <img className=' w-33 h-30 md:w-59  lg:w-20 lg:h-20 border border-[#57534e] rounded-2xl ' src={item.image} alt="" />
             <div className='flex gap-2'>
              
            <div>
              <h3>{item.name}  (x{item.qty})</h3>

            </div>
            <div>
             <p className='text-[#f87171] px-9 md:px-58 lg:px-50'>{item.hotel}</p>

            </div>
             </div>

            <p className='ml-auto'>Total price: ₹{item.qty*item.price}</p>
            <div className='flex gap-1  items-center'>
              <p className='bg-[#fca5a5] w-2 h-2 rounded-2xl'></p>
              <p>Order Placed</p>

            </div>
            <Link to='/trackorder'>
             <button onClick={()=>dispatch(trackOrder(item))} className='flex items-center duration-300 ease-in hover:bg-[#fca5a5] bg-[#f87171] p-1.5 rounded-md text-[white]'>Track Order</button>
            </Link>
            
           
          </div>
        ))
      )}
      <div hidden={!amountHid} className='flex gap-20 py-5'>
         <p>Amount to be paid:  ₹{sum}</p>
        

      </div>
      <Link to='/home'>
      <div className='flex lg:justify-end md:justify-center justify-center' hidden={!amountHid} >
        <button className='text-[#ef4444] border-2 border-[#ef4444] rounded-2xl duration-300 ease-in w-30 h-8 hover:bg-[#ef4444] hover:text-[white]'>return Home</button>

      </div>
      </Link>

      
       
      </div>
    
  )
}

export default Myorders;
