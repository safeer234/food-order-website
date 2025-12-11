import React from 'react'
import homeimg1 from '../assets/images/homeimages/food images/1000_F_726814546_vPP6japeeIpL2aFg3QJQmnNnvINzTRPu.jpg'
import scooterimg from '../assets/images/featureimg/scooter-delivery.png'
import refreshimg from '../assets/images/featureimg/refresh-ccw.png'
import freeimg from '../assets/images/featureimg/free-delivery.png'
import homefoodimg1 from '../assets/images/homefoodimg/1000_F_1599070058_g1P7zQoEDxZvN4ErwdJ0HKyFfQ7DF7QB.jpg'
import homefoodimg2 from '../assets/images/homefoodimg/1000_F_726813091_9yK4aWhJXPs3gz594mdxRxZ1akTUOinC.jpg'
import homefoodimg3 from '../assets/images/homefoodimg/1000_F_300233026_dIJcI3ry93imSyDqHM0z4naEGaTedJ07.jpg'
import { Link } from 'react-router-dom'




function Home() {
    
   
    return (
        <div>

            {/* Hero Section with heading, text and buttons */}
            <div className='block sm:block md:block lg:flex gap-30'>
                {/* Text left section */}
                <div className='px-15 py-30 '>
                    <h1 className='text-[27px] sm:text-3xl md:text-6xl lg:text-6xl text-[#ef4444] font-semibold'>
                        "Taste the luxury<br />delivered by <span className='text-[#57534e]'>Serve</span>It"
                    </h1><br />
                    <p className='text-[#57534e] text-md sm:text-md md:text-2xl lg:text-sm '>
                        We are just a click away when you<br /> crave for Delicious Fast Food
                    </p><br />

                    {/* Buy & Contact Buttons */}
                    <div className='flex gap-5'>
                        <Link to='/menu'>
                            <button className=' buybtn text-md sm:text-xl md:text-xl lg:text-lg text-[white] flex text-center items-center justify-center rounded-3xl bg-[#ef4444] w-29 h-10 md:w-35 md:h-12  lg:w-29 lg:h-10 py-2 cursor-pointer duration-300  ease-in hover:border-2 hover:bg-[white] hover:text-[#57534e] hover:border-[#ef4444]'>
                                Buy Now
                            </button>
                        </Link>

                        <Link to='/contact'>
                            <button className=' contactbtn text-md sm:text-xl md:text-xl lg:text-lg  text-[#57534e] flex text-center items-center justify-center rounded-3xl border-2 border-[#ef4444] w-29 h-10 md:w-35 md:h-12  lg:w-29 lg:h-10 py-2 cursor-pointer duration-300 ease-out hover:bg-[#ef4444] hover:text-[white] hover:border-0'>
                                Contact Us
                            </button>
                        </Link>

                    </div>
                </div>

                {/* Hero Image right section */}
                <div className='py-20'>
                    <img className=' mainimg w-300 h-80 sm:w-300 sm:h-100 md:w-200 md:h-130 lg:h-110 lg:w-160' src={homeimg1} alt="" />
                </div>
            </div>

            <div className='px-15 text-[#57534e] text-3xl md:text-5xl lg:text-5xl font-semibold mb-13'>
                <h2>Our <span className='text-[#ef4444]'>Services:</span></h2>

            </div>

            {/* Features Section */}
            <div className='block  sm:block md:block lg:flex gap-60 w-86 sm:w-94 md:w-150 lg:w-360 px-14 sm:px-5 md:px-40 lg:px-16 ml-2 sm:ml-3 md:ml-20 lg:ml-10 h-87 sm:h-90 md:h-149 lg:h-34 py-0.5 sm:py-0.5 md:py-10 lg:py-2 lg:shadow-2xl lg:bg-[#ffedd5] rounded-2xl '>
                
                {/* Fast Delivery Feature */}
                <div className='flex gap-7 mb-20 md:mb-20 lg:mb-0'>
                    <div className='py-2 mt-4 bg-amber-400 rounded-[410px] flex justify-center w-18 md:w-25 lg:w-20 h-18 md:h-25 lg:h-20'>
                        <img src={scooterimg} alt="" />
                    </div>
                    <div className='flex items-center'>
                        <h3 className='font-semibold text-xl md:text-2xl lg:text-2xl text-[#57534e]'>Fast Delivery</h3>
                       
                    </div>
                </div>

                {/* Fresh Food Feature */}
                <div className='flex gap-7 mb-20 md:mb-20 lg:mb-0'>
                    <div className='py-2 mt-4 bg-amber-400 rounded-[410px] flex justify-center w-18 md:w-25 lg:w-20 h-18 md:h-25 lg:h-20'>
                        <img src={refreshimg} alt="" />
                    </div>
                    <div className='flex items-center'>
                        <h3 className='font-semibold text-xl md:text-2xl lg:text-2xl text-[#57534e]'>Fresh Food</h3>
                       
                    </div>
                </div>

                {/* Free Delivery Feature */}
                <div className='flex gap-7'>
                    <div className='py-2 mt-4 bg-amber-400 rounded-[410px] flex justify-center w-18 md:w-25 lg:w-20 h-18 md:h-25 lg:h-20'>
                        <img src={freeimg} alt="" />
                    </div>
                    <div className='flex items-center'>
                        <h3 className='font-semibold text-xl md:text-2xl lg:text-2xl text-[#57534e]'>Free Delivery</h3>
                       
                    </div>
                </div>
            </div>

            {/* Best Delivered Categories Section */}
            <div>
                <div className='block sm:block md:block lg:flex py-45 px-15 justify-between '>
                    <h2 className='text-[#57534e] text-3xl md:text-5xl lg:text-5xl font-semibold'>
                        Best <span className='text-[#ef4444]'>Delivered</span><br />Categories
                    </h2>
                    <p className=' text-[15px] md:text-[26px] lg:text-[16px] text-[#57534e] py-6'>
                        Here are some of our best distributed<br />Categories.If you want you can order<br />from here.
                    </p>
                </div>

                {/* Three Category Cards */}
                <div className='block sm:block md:block lg:flex gap-40 px-15 text-center '>

                    {/* Burger Card */}
                    <div className=' mb-18 md:mb-19 lg:mb-0'>
                        <img className='burgerimg w-90 md:w-90 lg:w-90 h-45 md:h-60 lg:h-60 md:ml-35 lg:ml-0' src={homefoodimg1} alt="" />
                        <h3 className='text-[#57534e] font-bold text-xl md:text-2xl'>Chicken Burger</h3>
                        <div className='flex text-center justify-center'>
                            <Link to='/menu'>
                                
                            <button className='text-[#ef4444] cursor-pointer md:text-xl'>Order Now</button>

                            </Link>
                            <div>
                                <i className='bxr  bxs-chevron-right px-2 py-2 text-md text-[#ef4444]'></i>
                            </div>
                        </div>
                    </div>

                    {/* Pizza Card */}
                    <div className=' mb-18 md:mb-19 lg:mb-0'>
                        <img className='pizzaimg w-90 md:w-90 lg:w-90 h-45 md:h-60 lg:h-60 md:ml-35 lg:ml-0' src={homefoodimg2} alt="" />
                        <h3 className='text-[#57534e] font-bold text-xl'>Chicken Pizza</h3>
                        <div className='flex text-center justify-center'>
                            <Link to='/menu'>
                                
                            <button className='text-[#ef4444] cursor-pointer'>Order Now</button>

                            </Link>
                            <div>
                                <i className='bxr  bxs-chevron-right px-2 py-2 text-md text-[#ef4444]'></i>
                            </div>
                        </div>
                    </div>

                    {/* Fries Card */}
                    <div>
                        <img className='frenchimg w-86 md:w-90 lg:w-90 h-50 md:h-60 lg:h-60 md:ml-35 lg:ml-0' src={homefoodimg3} alt="" />
                        <h3 className='text-[#57534e] font-bold text-xl'>French Fries</h3>
                        <div className='flex text-center justify-center'>
                            <Link to='/menu'>
                                 <button className='text-[#ef4444] cursor-pointer'>Order Now</button>

                            </Link>
                            
                           
                            <div>
                                <i className='bxr  bxs-chevron-right px-2 py-2 text-md text-[#ef4444]'></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home
