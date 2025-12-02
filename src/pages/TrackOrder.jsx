import React from 'react'
import { useSelector } from 'react-redux'
import OrderPlaced from '../components/animated/OrderPlaced'
import WorkIcon from '../components/animated/WorkIcon'
import DeliveryGuy from '../components/animated/DeliveryGuy'
import Delivered from '../components/animated/Delivered'
import { Link } from 'react-router-dom'
function TrackOrder() {
    const trackFood = useSelector((state) =>state.track.tracks)
  return (
    <div>
      {trackFood.map(item=>(
        <div key={item.id}>
            <div className=' px-7 py-4 lg:px-7 lg:py-4'>
                <p className=' text-xl lg:text-3xl font-semibold text-[#57534e]'>Order <span className='text-[#ef4444]'>Status</span> </p>
            </div>
            <div className='flex justify-center py-15 lg:py-28'>
                 <div >
                   <img className=' w-40 h-40 rounded-[410px] border-4 lg:w-50 lg:h-50 lg:rounded-[410px]  lg:border-4 border-red-600' src={item.image} alt="" />
                     <p className='text-center py-2 text-xl text-[#57534e]'>{item.name}</p>
                  

            </div>
            </div>

           <div className='lg:flex lg:justify-center md:px-40'>

         

            <div className=' items-center flex   '>
                <div className='bg-green-400 scale-35 rounded-[410px]'>
                    <OrderPlaced  />

                </div>
                <div className=''>
                     <p className='text-lg font-medium text-[#57534e]'>Order Placed</p>

                </div>
                
               

            </div>







            <div className=' items-center flex  '>
                <div className=' scale-35 rounded-[410px]'>
                    <WorkIcon  />

                </div>
                <div className=''>
                     <p className='text-lg font-medium text-[#57534e]'>Chef at Work</p>

                </div>
                
               

            </div>






             <div className=' items-center flex    '>
                <div className=' scale-35 rounded-[410px]'>
                    <DeliveryGuy  />

                </div>
                <div className=''>
                     <p className='text-lg font-medium text-[#57534e]'>Delivery Guy Assigned</p>

                </div>
                
               

            </div>








             <div className=' items-center flex   '>
                <div className=' scale-35 rounded-[410px]'>
                    <Delivered  />

                </div>
                <div className=''>
                     <p className='text-lg font-medium text-[#57534e]'>Delivered</p>

                </div>
                
               

            </div>



      


            












              </div>


                     <Link to='/home'>
      <div className='flex justify-center'  >
        <button className='text-[#ef4444] border-2 border-[#ef4444] rounded-2xl duration-300 ease-in w-30 h-8 hover:bg-[#ef4444] hover:text-[white]'>return Home</button>

      </div>
      </Link>









         

        </div>
      ))}
    </div>
  )
}

export default TrackOrder
