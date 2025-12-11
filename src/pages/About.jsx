import React from 'react'
import aboutimg1 from '../assets/images/aboutimg/1000_F_1631041094_4Fn8EfEg3b2Xvr1wAIrXwdvyDKqz2CzO.jpg'
import aboutimg2 from '../assets/images/aboutimg/1000_F_1629502759_8V0VEiFIYIHJi8sy2BCjfqmsU5k3Ocu9.jpg'
import { motion as MOTION } from "framer-motion";
function About() {
  return (
    <MOTION.div
             
              initial={{ opacity: 0, y: -80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
      <div className=' block md:block  lg:flex py-27 items-center gap-90 justify-center'>
        <div className='text-center'>
           <h1 className='text-5xl px-0 md:px-68 lg:px-0  lg:border-4  w-90 h-30 sm:text-4xl  rounded-2xl duration-300 ease-linear  md:text-7xl lg:text-8xl hover:bg-[#d6d3d1] text-[#ef4444] font-semibold'>
            
                         <span className='text-[#57534e]'>Serve</span>It
                    </h1>
                    <img className='w-140 py-5 ml-0 md:ml-30 lg:ml-0 ' src={aboutimg1} alt="" />
        </div>
        <div className=' items-center text-center px-9 lg:px-0 py-12 lg:py-0 md:py-12 '>
          <h2 className='text-4xl md:text-5xl  text-[#57534e] font-semibold'>About <span className='text-[#ef4444]'>us</span></h2>
          <div className=' '></div>
        
          <div className=' flex justify-center items-center w-70 md:w-130 ml-0 md:ml-28 lg:ml-0 lg:w-110 md:text-2xl lg:text-xl py-5 lg:py-0 md:py-5 text-[#57534e] '><p>ServeIt is your go-to fast food delivery partner, bringing delicious meals right to your doorstep with just a click. We offer a wide variety of mouth-watering fast foods prepared fresh for every order — we never deliver anything stale. </p></div>

        </div>

      </div>

      <div className='flex justify-center gap-90 '>
        <div className='ml-93 md:ml-98 lg:ml-0'>
          <div>
            <h2 className='text-[#57534e] text-2xl md:text-5xl md:w-80 lg:text-4xl font-semibold '>What We <span className='text-[#ef4444]'>Offer</span></h2>

          </div>
          <div className='block md:block lg:flex py-8 gap-6 items-center ml-8 md:ml-19 lg:ml-0'>
            <div>
              <p className=' text-xl md:text-3xl lg:text-2xl text-[#57534e] font-medium'>Fast Delivery</p>

            </div>
            <div className='mt-7 lg:mt-0 px-6 md:px-7 lg:px-0'>
              <i className="bxr text-center text-[#57534e] bg-amber-400 rounded-[410px] p-2 text-5xl md:text-7xl lg:text-5xl bxs-scooter-delivery" />

            </div>

          </div>


          <div className='block md:block lg:flex py-8 gap-10 items-center ml-8 md:ml-19 lg:ml-0'>
            <div>
              <p className='text-xl md:text-3xl lg:text-2xl text-[#57534e] font-medium'>Fresh Food</p>

            </div>
            <div className='mt-7 lg:mt-0 px-6 md:px-7 lg:px-0'>
              <i class='bx text-center text-[#57534e] bg-amber-400 rounded-[410px] p-2 text-5xl md:text-7xl lg:text-5xl  bx-refresh-ccw' ></i> 

            </div>

          </div>



          <div className='block md:block lg:flex w-40 lg:w-60 md:w-60 py-8 gap-6 items-center ml-8 md:ml-19 lg:ml-0'>
            <div>
              <p className='text-xl md:text-3xl lg:text-2xl text-[#57534e] font-medium'>Free Delivery</p>

            </div>
            <div className='mt-7 lg:mt-0 px-6 md:px-7 lg:px-0'>
             <i class='bx  text-center text-[#57534e] bg-amber-400 rounded-[410px] p-2 text-5xl md:text-7xl lg:text-5xl   bx-truck'></i> 

            </div>

          </div>
          

        </div>

        <div className='flex lg:flex md:flex'>
          <img className='w-140' src={aboutimg2} alt="" />
        </div>




      </div>
      
    </MOTION.div>
  )
}

export default About
