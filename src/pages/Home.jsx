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
                <div className='px-15 py-30'>
                    <h1 className='text-5xl sm:text-4xl md:text-7xl lg:text-6xl text-[#ef4444] font-semibold'>
                        All Fast Food is<br />Available at <span className='text-[#57534e]'>Serve</span>It
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
                    <img className=' mainimg w-300 h-100 sm:w-300 sm:h-100 md:w-300 md:h-100 lg:h-110 lg:w-160' src={homeimg1} alt="" />
                </div>
            </div>

            {/* Features Section */}
            <div className='block sm:block md:block lg:flex gap-40 w-90 sm:w-90 md:w-150 lg:w-360 px-5 sm:px-5 md:px-10 lg:px-16 ml-2 sm:ml-3 md:ml-20 lg:ml-10 h-90 sm:h-90 md:h-100 lg:h-34 py-0.5 sm:py-0.5 md:py-10 lg:py-2 shadow-2xl bg-[#ffedd5] rounded-2xl '>
                
                {/* Fast Delivery Feature */}
                <div className='flex gap-7'>
                    <div className='py-2 mt-4 bg-amber-400 rounded-[410px] flex justify-center w-20 h-20'>
                        <img src={scooterimg} alt="" />
                    </div>
                    <div>
                        <h3 className='font-semibold text-2xl text-[#57534e]'>Fast Delivery</h3>
                        <p className='text-[#57534e]'>
                            The food will be delivered to<br />your home within 1-2 hours of<br />your ordering
                        </p>
                    </div>
                </div>

                {/* Fresh Food Feature */}
                <div className='flex gap-7'>
                    <div className='py-2 mt-4 bg-amber-400 rounded-[410px] flex justify-center w-20 h-20'>
                        <img src={refreshimg} alt="" />
                    </div>
                    <div>
                        <h3 className='font-semibold text-2xl text-[#57534e]'>Fresh Food</h3>
                        <p className='text-[#57534e]'>
                            Your food will be delivered<br />100% fresh to your home, we<br />do not deliver stale food
                        </p>
                    </div>
                </div>

                {/* Free Delivery Feature */}
                <div className='flex gap-7'>
                    <div className='py-2 mt-4 bg-amber-400 rounded-[410px] flex justify-center w-20 h-20'>
                        <img src={freeimg} alt="" />
                    </div>
                    <div>
                        <h3 className='font-semibold text-2xl text-[#57534e]'>Free Delivery</h3>
                        <p className='text-[#57534e]'>
                            Your food delivery is<br /> absolutely free of cost<br />just order and enjoy
                        </p>
                    </div>
                </div>
            </div>

            {/* Best Delivered Categories Section */}
            <div>
                <div className='block sm:block md:block lg:flex py-45 px-15 justify-between '>
                    <h2 className='text-[#57534e] text-5xl font-semibold'>
                        Best <span className='text-[#ef4444]'>Delivered</span><br />Categories
                    </h2>
                    <p className='text-[16px] text-[#57534e]'>
                        Here are some of our best distributed<br />Categories.If you want you can order<br />from here.
                    </p>
                </div>

                {/* Three Category Cards */}
                <div className='block sm:block md:block lg:flex gap-40 px-15 text-center '>

                    {/* Burger Card */}
                    <div className='md:mb-19 lg:mb-0'>
                        <img className='burgerimg w-90 h-60 md:ml-35 lg:ml-0' src={homefoodimg1} alt="" />
                        <h3 className='text-[#57534e] font-bold text-xl'>Chicken Burger</h3>
                        <div className='flex text-center justify-center'>
                            <Link to='/menu'>
                                
                            <button className='text-[#ef4444] cursor-pointer'>Order Now</button>

                            </Link>
                            <div>
                                <i className='bxr  bxs-chevron-right px-2 py-2 text-md text-[#ef4444]'></i>
                            </div>
                        </div>
                    </div>

                    {/* Pizza Card */}
                    <div className='md:mb-19 lg:mb-0'>
                        <img className='pizzaimg w-90 h-60 md:ml-35 lg:ml-0' src={homefoodimg2} alt="" />
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
                        <img className='frenchimg w-90 h-60 md:ml-35 lg:ml-0' src={homefoodimg3} alt="" />
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
