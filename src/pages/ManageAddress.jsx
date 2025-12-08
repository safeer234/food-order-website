import React from 'react'
import { Link } from 'react-router-dom'
function ManageAddress() {
  return (
    <div className='py-9'>
      <div className='flex justify-between items-center'>
        <p className='text-xl md:text-2xl lg:text-3xl text-[#57534e] font-bold px-6'>Address</p>
        <Link to='/addaddress'> 
         <i className='bx text-xl md:text-4xl lg:text-5xl text-[#ef4444] bx-plus-circle mr-6' ></i> 
        </Link>
      
      </div>
    </div>
  )
}

export default ManageAddress
