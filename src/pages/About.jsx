import React from 'react'
import aboutimg1 from '../assets/images/aboutimg/1000_F_1631041094_4Fn8EfEg3b2Xvr1wAIrXwdvyDKqz2CzO.jpg'
import aboutimg2 from '../assets/images/aboutimg/1000_F_1629502759_8V0VEiFIYIHJi8sy2BCjfqmsU5k3Ocu9.jpg'
function About() {
  return (
    <div>
      <div className='flex py-27 items-center gap-90 justify-center'>
        <div className='text-center'>
           <h1 className='text-5xl border-4 w-90 h-30 sm:text-4xl  rounded-2xl duration-300 ease-linear  md:text-7xl lg:text-8xl hover:bg-[#d6d3d1] text-[#ef4444] font-semibold'>
            
                         <span className='text-[#57534e]'>Serve</span>It
                    </h1>
                    <img className='w-140 py-5' src={aboutimg1} alt="" />
        </div>
        <div className=' items-center text-center'>
          <h2 className='text-4xl  text-[#57534e] font-semibold'>About <span className='text-[#ef4444]'>us</span></h2>
          <div className=' '></div>
        
          <div className='flex justify-center items-center w-110 text-xl text-[#57534e] '>          <p>ServeIt is your go-to fast food delivery partner, bringing delicious meals right to your doorstep with just a click. We offer a wide variety of mouth-watering fast foods prepared fresh for every order — we never deliver anything stale. </p></div>

        </div>

      </div>

      <div className='flex justify-center gap-90'>
        <div>
          <div>
            <h2 className='text-[#57534e] text-4xl font-semibold'>What We <span className='text-[#ef4444]'>Offer</span></h2>

          </div>
          <div className='flex py-8 gap-6 items-center'>
            <div>
              <p className='text-2xl text-[#57534e] font-medium'>Fast Delivery</p>

            </div>
            <div>
              <i className="bxr text-center text-[#57534e] bg-amber-400 rounded-[410px] p-2 text-5xl bxs-scooter-delivery" />

            </div>

          </div>


          <div className='flex py-8 gap-10 items-center'>
            <div>
              <p className='text-2xl text-[#57534e] font-medium'>Fresh Food</p>

            </div>
            <div>
              <i class='bx text-center text-[#57534e] bg-amber-400 rounded-[410px] p-2 text-5xl   bx-refresh-ccw' ></i> 

            </div>

          </div>



          <div className='flex py-8 gap-6 items-center'>
            <div>
              <p className='text-2xl text-[#57534e] font-medium'>Free Delivery</p>

            </div>
            <div>
             <i class='bx  text-center text-[#57534e] bg-amber-400 rounded-[410px] p-2 text-5xl   bx-truck'></i> 

            </div>

          </div>
          

        </div>

        <div>
          <img className='w-140' src={aboutimg2} alt="" />
        </div>




      </div>
      
    </div>
  )
}

export default About
