import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import {useSelector, useDispatch } from 'react-redux';
import { changeBg } from '../features/toggle/ToggleSlice';
import { showLogin } from '../features/login and signup/LoginSlice';
import LoginForm from '../components/LoginForm';

function Root() {
  const dispatch = useDispatch()
   const toggleValue = useSelector((state) => state.toggle.value);
   const loginValue =useSelector((state)=>state.login.value);
   const hideValue = useSelector((state) => state.hide.value)
   console.log("Redux Theme State => ", toggleValue);
  const [isOpen, setIsOpen] = useState(false);

  return (
     
    <div className={toggleValue ? "dark" : ""}>
     <div className='fixed inset-0 flex items-center  justify-center  h-screen  z-50  ' hidden={!loginValue}>
      <div hidden={!hideValue} className='bg-[white]  shadow-2xl w-100 h-100 text-center '>
        <LoginForm />

      </div>
        

      </div>
      <div className='z-0'>

        <header className=" shadow-md bg-white dark:bg-gray-900 dark:text-gray-100">
        <nav className="flex justify-between items-center px-6 py-4">
          
          
          <div>
            <NavLink to='/home' className="font-bold text-[#57534e] text-2xl">
              Serve<span className='text-[#ef4444]'>It</span>
            </NavLink>
          </div>

         
          <ul className="hidden lg:flex gap-10 ">
           <li className="text-[#57534e] dark:text-gray-200 hover:text-[#ef4444] dark:hover:text-[#ef4444]">
  <NavLink to='/home'>Home</NavLink>
</li>
<li className="text-[#57534e] dark:text-gray-200 hover:text-[#ef4444] dark:hover:text-[#ef4444]">
  <NavLink to='/menu'>Menu</NavLink>
</li>
<li className="text-[#57534e] dark:text-gray-200 hover:text-[#ef4444] dark:hover:text-[#ef4444]">
  <NavLink to='/services'>Services</NavLink>
</li>
<li className="text-[#57534e] dark:text-gray-200 hover:text-[#ef4444] dark:hover:text-[#ef4444]">
  <NavLink to='/about'>About</NavLink>
</li>
<li className="text-[#57534e] dark:text-gray-200 hover:text-[#ef4444] dark:hover:text-[#ef4444]">
  <NavLink to='/contact'>Contact</NavLink>
</li>

            <div>
               <label for="AcceptConditions" className="relative block h-8  w-12 [-webkit-tap-highlight-color:transparent]">
  <input type="checkbox" id="AcceptConditions" className="peer sr-only" onClick={()=>dispatch(changeBg())}/>
  <span className="absolute inset-0 m-auto h-2 rounded-full bg-gray-300"></span>

  <span className="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-gray-500 transition-[inset-inline-start] peer-checked:start-6 peer-checked:*:scale-0">
    <span className="absolute inset-0 m-auto size-4 rounded-full bg-gray-200 transition-transform">
    </span>
  </span>
</label>

            </div>
           


          </ul>

          
          <ul className="hidden lg:flex gap-6">
            <li  onClick={()=> dispatch(showLogin())} className=' text-[#ef4444]'>Login</li>
            <li className='signupbtn border-[#ef4444] text-[#ef4444] border-2 px-4 p-0.5 rounded-3xl'>
              <NavLink>Sign Up</NavLink>
            </li>
          </ul>

          {/* Hamburger Button */}
          <button
            className="lg:hidden text-[#57534e]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-lg p-5 space-y-5 text-center text-[#57534e]">
            <NavLink onClick={() => setIsOpen(false)} to="/home" className="block hover:text-[#ef4444]">Home</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/menu" className="block hover:text-[#ef4444]">Menu</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/services" className="block hover:text-[#ef4444]">Services</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/about" className="block hover:text-[#ef4444]">About</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/contact" className="block hover:text-[#ef4444]">Contact</NavLink>

            <hr />
            <NavLink className="text-[#ef4444] block">Login</NavLink>
            <NavLink className="border-[#ef4444] text-[#ef4444] border-2 px-4 py-1 rounded-3xl block">
              Sign Up
            </NavLink>
          </div>
        )}
        
      </header>

      {/* Render pages */}
      
        <main className="">
        <Outlet />
      </main>


      </div>

      
      
      
    </div>
  )
}

export default Root;
