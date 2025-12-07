import React from 'react'

function EditProfile() {
  return (
    <div className='py-9'>
       
             <div>
            <p className='px-6 font-bold text-3xl text-[#57534e]'>Edit <span className='text-[#ef4444]'>Profile</span></p>
        </div>
         <div className='py-20'>
      <div className='flex justify-center'>
        <div className='lg:py-3 lg:px-4 '>
                <label htmlFor="image">
               <i className='bxr text-9xl w-35 text-center items-center h-35  border rounded-[410px] text-[#a8a29e]  bx-arrow-out-up-square-half'></i> 
            </label>
            <input type="file" id='image' hidden required />
           
                <p className='text-center md:text-xl text-gray-400 py-2'>Upload Image</p>

           
            
            
            </div>

            

      </div>
      {/* form */}

            <div className='flex  justify-center py-20'>
                <form action="">
                    <div>
                        <input type="text" className='border-2 border-[#d1d5db] w-85 md:w-150 lg:w-169 lg:h-9 rounded-md placeholder:text-sm p-2' placeholder='Enter Your Name' />


                    </div>

                     <div className='py-10'>
                        <input type="text" className='border-2 border-[#d1d5db] w-85 md:w-150 lg:w-169 lg:h-9 rounded-md placeholder:text-sm p-2' placeholder='Enter Your Email' />


                    </div>
                </form>
            </div>

            <div className='flex justify-center'>
                <button className='bg-[#ef4444] text-white py-2 w-85 md:w-150 lg:w-169 rounded-lg hover:bg-red-600 mb-4'>Save</button>
            </div>

        </div>
       
    </div>
  )
}

export default EditProfile
