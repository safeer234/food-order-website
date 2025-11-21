import React from 'react'
import { useDispatch } from 'react-redux'
import { hideLogin } from '../features/hide login/HideLogin'
function LoginForm() {
    const dispatch = useDispatch()
  return (
    <div>
        <div className='flex items-center bg-amber-500 justify-center'>
            <div className='justify-center flex'>
                <h1>Login</h1>

            </div>
             
             <div className='text-center items-center   justify-center'>
                <i onClick={()=> dispatch(hideLogin())} class='bxr  bx-x'></i> 

             </div>
             

        </div>
       
        <label htmlFor="">Email</label>
      <input type="text" />
      
    </div>
  )
}

export default LoginForm
