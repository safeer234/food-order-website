import React from 'react'

function ChangePassword() {
  return (
     <div className='py-9'>
       
             <div>
            <p className='px-6 font-bold text-3xl text-[#57534e]'>Change <span className='text-[#ef4444]'>Password</span></p>
        </div>

        <div className='px-6 py-4'>
            <p className='text-[#57534e] '>Enter your new password and confirm password.</p>
        </div>
         <div className='py-20'>
     
      {/* form */}

            <div className='flex  justify-center '>
                <form action="">
                    <div className='py-3'>
                        <input type="password" className='border-2 border-[#d1d5db] w-70 md:w-150 lg:w-170 lg:h-9 rounded-md placeholder:text-sm p-2' placeholder='Enter new password' />


                    </div>

                     <div className='py-7'>
                        <input type="password" className='border-2 border-[#d1d5db] w-70 md:w-150 lg:w-170 lg:h-9 rounded-md placeholder:text-sm p-2' placeholder='Confirm password' />


                    </div>

                   
                </form>
            </div>

            <div className='flex justify-center'>
                <button className='bg-[#ef4444] text-white py-2 w-70 md:w-150 lg:w-170 rounded-lg hover:bg-red-600 mb-4'>Save</button>
            </div>

        </div>
       
    </div>
  )
}

export default ChangePassword
