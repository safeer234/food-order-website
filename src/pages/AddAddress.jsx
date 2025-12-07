import React from 'react'

function AddAddress() {
  return (
     <div className='py-9'>
       
             <div>
            <p className='px-6 font-bold text-3xl text-[#57534e]'>Add <span className='text-[#ef4444]'>Address</span></p>
        </div>
         <div className='py-20'>
     
      {/* form */}

            <div className='flex  justify-center '>
                <form action="">
                    <div className='py-3'>
                        <input type="text" className='border-2 border-[#d1d5db] w-70 md:w-150 lg:w-170 lg:h-9 rounded-md placeholder:text-sm p-2' placeholder='Enter Your Name' />


                    </div>

                     <div className='py-7'>
                        <input type="text" className='border-2 border-[#d1d5db] w-70 md:w-150 lg:w-170 lg:h-9 rounded-md placeholder:text-sm p-2' placeholder='Enter Your Email' />


                    </div>

                    <div className='py-3'>
                        <input type="text" className='border-2 border-[#d1d5db] w-70 md:w-150 lg:w-170 lg:h-9 rounded-md placeholder:text-sm p-2' placeholder='Enter Phone Number' />


                    </div>

                    <div className='py-7'>
                        <input type="text" className='border-2 border-[#d1d5db] w-70 md:w-150 lg:w-170 lg:h-9 rounded-md placeholder:text-sm p-2' placeholder='Delivery Address' />


                    </div>

                    <div className='py-3'>
                        <input type="text" className='border-2 border-[#d1d5db] w-70 md:w-150 lg:w-170 lg:h-9 rounded-md placeholder:text-sm p-2' placeholder='Nearby Landmark (Optional)' />


                    </div>

                      <div className='py-7 flex lg:gap-2 gap-4 '>
                        <input type="text" className='border-2 border-[#d1d5db] w-30 md:w-50 lg:w-75 lg:h-9 rounded-md placeholder:text-sm p-2' placeholder='House (Optional)' />
                        <input type="text" className='border-2 border-[#d1d5db] w-30 md:w-50 lg:w-75 lg:h-9 rounded-md placeholder:text-sm p-2' placeholder='Floor Landmark (Optional)' />


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

export default AddAddress
