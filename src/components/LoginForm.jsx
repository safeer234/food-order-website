import React from 'react'
import { useDispatch } from 'react-redux'

import { showLogin } from '../features/login and signup/LoginSlice'
function LoginForm() {
    const dispatch = useDispatch()
  return (
    <div>
        <div className='flex justify-between p-7  '>
            <div className='justify-center cursor-pointer flex'>
                <h1 className='font-bold text-2xl text-[#ef4444]'>Login</h1>

            </div>
             
             <div className='text-center items-center   justify-center'>
                <i onClick={()=> dispatch(showLogin())} className='bxr text-2xl text-[#57534e]  bx-x'></i> 

             </div>
             

        </div>
        <div className='text-center'>
             <div>
          <input className='border-2 border-[#d1d5db] w-69 h-9 rounded-md placeholder:text-sm p-2' type="text" placeholder='Your email' />

       </div>

       <div className='py-8'>
         <input className='border-2 border-[#d1d5db] w-69 h-9 rounded-md placeholder:text-sm p-2' type="password" placeholder='Your password' />

       </div>

        </div>
       
      
       
       <div className='flex text-center justify-center items-center'>
        <button className='bg-[#ef4444] w-69 h-10 rounded-md text-[white]'>Login</button>
       </div>
       <div className='flex px-10 py-4 gap-2'>
        <div>
            <input type="checkbox" />

        </div>
        <div>
             <p className='text-[12px] text-[#57534e]'>By continuing, i agree to the terms of use & <br />privacy policy </p>


        </div>

       
        
       
       </div>
        <div className='flex px-11'>
            <p className='text-[13px] text-[#57534e]'>Create a new account?</p>
            <button className='text-[13px] px-1 text-[#ef4444]'>Click Here</button>

        </div>
      

       
     
      
    </div>
  )
}

export default LoginForm
