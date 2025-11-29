import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { changeBg } from '../features/toggle/ToggleSlice';
import { showLogin } from '../features/login and signup/LoginSlice';
import { showSign } from '../features/login and signup/SignupSlice';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import Footer from '../components/Footer';
import { loginSuccess } from '../features/login and signup/LoginSlice';
import { logOut } from '../features/login and signup/LoginSlice';

function Root() {
  const dispatch = useDispatch();

  const toggleValue = useSelector((state) => state.toggle.value);
  const loginValue = useSelector((state) => state.login.value);
  const signValue = useSelector((state) => state.sign.value);
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);

  const [isOpen, setIsOpen] = useState(false);

  // Auto login if stored in localStorage
useEffect(() => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (isLoggedIn) {
    dispatch(loginSuccess());
  }
}, [dispatch]);

  useEffect(() => {
  if (!isAuthenticated) {
    dispatch(showLogin());
  }
}, [isAuthenticated, dispatch]);

  return (
    <div className={toggleValue ? "dark" : ""}>
      
      {/* ---------------------- UI Blur Overlay Before Login ---------------------- */}
      <div className={`transition-all ${!isAuthenticated ? "blur-xl  opacity-40" : ""}`}>
        
        {/* HEADER */}
        <header className="shadow-md bg-white dark:bg-gray-900 dark:text-gray-100">
          <nav className="flex justify-between items-center px-6 py-4">
            
            <NavLink to='/home' className="font-bold text-[#57534e] text-2xl">
              Serve<span className='text-[#ef4444]'>It</span>
            </NavLink>

            <ul className="hidden lg:flex gap-8">
              <li className=' text-[#57534e] hover:text-[#ef4444]'><NavLink to='/home'>Home</NavLink></li>
              <li className=' text-[#57534e] hover:text-[#ef4444]' ><NavLink to='/menu'>Menu</NavLink></li>
              <li className=' text-[#57534e] hover:text-[#ef4444]'><NavLink to='/myorder'>Orders</NavLink></li>
              <li className='text-[#57534e] hover:text-[#ef4444]'><NavLink to='/about'>About</NavLink></li>
              <li className=' text-[#57534e] hover:text-[#ef4444]'><NavLink to='/contact'>Contact</NavLink></li>
              <div>
                <label className="relative block h-8 w-12">
                  <input type="checkbox" className="peer sr-only" onClick={() => dispatch(changeBg())} />
                  <span className="absolute inset-0 m-auto h-2 rounded-full bg-gray-300"></span>
                  <span className="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-gray-500 transition peer-checked:start-6"></span>
                </label>
              </div>
            </ul>
<ul className="hidden lg:flex gap-5">
  {!isAuthenticated ? (
    <>
      <li onClick={() => dispatch(showLogin())} className='text-[#ef4444] cursor-pointer'>Login</li>
      <li onClick={() => dispatch(showSign())} className='border-2 px-4 py-1 rounded-3xl text-[#ef4444] border-[#ef4444] cursor-pointer'>Sign Up</li>
    </>
  ) : (
    <li
       onClick={() => {
    localStorage.removeItem("user");
     localStorage.removeItem("isLoggedIn"); // Only remove logged-in session, not all users
    dispatch(logOut());
      }}
      className='text-white bg-red-500 px-4 py-1 rounded-3xl duration-300 ease-in hover:border-2 hover:bg-white hover:border-[#ef4444] hover:text-[#ef4444] cursor-pointer'
    >
      Logout
    </li>
  )}
</ul>

            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>
        </header>

        {/* MAIN CONTENT */}
        <main>
          <Outlet />
        </main>

        <Footer />
      </div>

      {/* ---------------------- LOGIN MODAL ---------------------- */}
      {loginValue && (
        <div  className='fixed inset-0 flex items-center justify-center bg-black/60 z-999'>
          <LoginForm />
        </div>
      )}

      {/* ---------------------- SIGNUP MODAL ---------------------- */}
      {signValue && (
        <div className='fixed inset-0 flex items-center justify-center bg-black/60 z-999'>
          <SignupForm />
        </div>
      )}

    </div>
  );
}

export default Root;
