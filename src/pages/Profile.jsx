import React from 'react'
import { Link } from 'react-router-dom';
function Profile() {
     const savedUser = JSON.parse(localStorage.getItem("user"));
    
  return (
    <div className='bg-[#fef2f2] py-9'>
        <div className='px-6'>
            <p className='text-3xl font-bold text-[#57534e]'>Profi<span className='text-[#ef4444]'>le</span></p>
        </div>

        <div className='lg:flex flex justify-center py-18'>
            <div className=' flex justify-evenly items-center rounded-2xl  shadow-2xl w-90 md:w-180 lg:w-260 lg:h-40'>
                {/* profile img */}


                <div >
                    <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          className=" w-20 lg:w-30 lg:h-30 rounded-full mx-auto"
          alt="user"
        />

                </div>
                {/* profile name */}

                <div>
                    <p className='text-[#57534e] text-xl md:text-3xl lg:text-3xl'>{savedUser?.username}</p>
                </div>


                <div>
                   <Link to='/editprofile'>
                   <i class='bx text-2xl md:text-3xl lg:text-4xl text-[#ef4444] bx-pencil-circle'></i> 

                   </Link>
                    
                </div>







            </div>





        </div>
        {/* account manage */}

        <div className='lg:flex flex justify-center'>
             <div className='flex items-center  shadow-2xl w-70 md:w-120 lg:w-160 h-30  rounded-2xl'>
               
                <div>

                     <div className='flex gap-3 px-3 items-center mb-3 '>
                        <i className='bx text-2xl text-[#ef4444]  bx-lock' ></i> 
                    <p className='text-xl hover:text-[#ef4444]'>Change Password</p>
                </div>
                <hr className='lg:w-156 text-gray-300' />


                <div className='flex gap-3 px-3 items-center py-3'>
                    <i className='bx text-2xl text-[#ef4444]   bx-trash' ></i> 
                    <p className='text-xl hover:text-[#ef4444]'>Delete Account</p>
                </div>

                </div>
               

            </div>
        </div>
           
      
    </div>
  )
}

export default Profile
