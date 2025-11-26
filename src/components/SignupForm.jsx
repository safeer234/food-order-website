import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showSign } from '../features/login and signup/SignupSlice';
function SignupForm() {
     const dispatch = useDispatch();
 const [focus, setFocus] = useState({
     errName: false,
    errEmail: false,
    errPassword: false,

  })
const [inputs, setInputs] = useState({
username: '',
  email:'',
  password:''
  

})
const handleSubmit = (e) => {
e.preventDefault();
}
const handleChange = (e) => {
  const name = e.target.name
  const value = e.target.value
  setInputs({...inputs, [name]: value})
}
 
  return (
      <div>
                 <form onSubmit={handleSubmit} action="">
    
            <div className='flex justify-between p-7  '>
                <div className='justify-center cursor-pointer flex'>
                    <h1 className='font-bold text-2xl text-[#ef4444]'>Sign Up</h1>
    
                </div>
                  <div className='text-center items-center   justify-center'>
                    <i onClick={()=> dispatch(showSign())} className='bxr text-2xl text-[#57534e]  bx-x'></i> 
    
                 </div>
                 
    
            </div>



            <div className='items-center px-14'>
                <div>
                        <input className="border-2 border-gray-300 w-69 h-9 rounded-md 
                              placeholder:text-sm px-3"
                  type="text" placeholder="Your Name" 
    name = 'username' 
    value ={inputs.username} 
    onChange={handleChange} 
    pattern="^[A-Za-z0-9]{3,16}$" 
    onBlur={()=> setFocus({...focus, errName: true })} 
    focus = {focus.errName.toString()} 
    required/>
      <br/>
    <span className=' lgin text-red-600 text-[12px] px-2'>Usename should be 3-16 characters</span>
                </div>

                 <div className='mt-8'>
              <input className='border-2 border-[#d1d5db] w-69 h-9 rounded-md placeholder:text-sm p-2' type="email" placeholder='Your email'  name = 'email'
         value ={inputs.email}
         onChange={handleChange}
         pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
         onBlur={()=> setFocus({...focus, errEmail: true })} 
         focus = {focus.errEmail.toString()} 
         required   /><br/>
         <span className=' lgin text-red-600 text-[12px] px-2'> Enter a valid Email id</span>
    
           </div>
    
           <div className='py-8'>
             <input className='border-2 border-[#d1d5db] w-69 h-9 rounded-md placeholder:text-sm p-2' type="password" placeholder='Your password'   name = 'password' 
          value ={inputs.password} 
          onChange={handleChange} 
          pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$' 
          onBlur={()=> setFocus({...focus, errPassword: true })} 
          focus = {focus.errPassword.toString()} 
          required  /><br/>
          <span className='lgin text-red-600 text-[12px] px-'>Password must have minimum 8 characters and include atleast an uppercase, digit and special characters </span>
    
           </div>
    
            </div>
           
          
           
           <div className='flex text-center justify-center items-center'>
            <button type='submit' className='bg-[#ef4444] w-69 h-10 rounded-md text-[white]'>Login</button>
           </div>
           <div className='flex px-16.5 py-4 gap-2'>
            <div>
                <input type="checkbox" />
    
            </div>
            <div>
                 <p className='text-[12px] text-[#57534e]'>By continuing, i agree to the terms of use & <br />privacy policy </p>
    
    
            </div>
    
           
            
           
           </div>
            <div className='flex px-16'>
                <p className='text-[13px] text-[#57534e]'>Already have an account?</p>
                <button className='text-[13px] px-1 text-[#ef4444]'>Login Here</button>
    
            </div>
    
                 </form>
                 
          
    
           
         
          
        </div>
  )
}

export default SignupForm
