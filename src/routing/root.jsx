import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { changeBg } from '../features/toggle/ToggleSlice';
import {  showLogin } from '../features/login and signup/LoginSlice';
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
  const [isProfileOpen, setIsProfileOpen] = useState(false);


  const [isOpen, setIsOpen] = useState(false);
  


// Auto login if stored in localStorage
 // AUTO LOGIN CHECK ON PAGE LOAD
const [loggedUser, setLoggedUser] = useState(null);

useEffect(() => {
  const savedUser = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (savedUser && isLoggedIn) {
    
    dispatch(loginSuccess());
    setLoggedUser(savedUser); // 👈 store user info
  } else {
    dispatch(logOut());
    setLoggedUser(null);
    dispatch(showLogin())
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);





  // blur background if not authenticated
 

  return (
    <div className={toggleValue ? "dark" : ""}>

      {/* ---------------------- UI Blur Before Login ---------------------- */}
      <div className={`transition-all ${!isAuthenticated  ? "blur-3xl opacity-20" : ""}`}>

        {/* HEADER */}
        <header className="shadow-md bg-white dark:text-gray-100 relative">
          <nav className="flex justify-between items-center px-6 py-4">

            {/* Logo */}
            <NavLink to="/home" className="font-bold text-[#57534e] text-2xl">
              Serve<span className="text-[#ef4444]">It</span>
            </NavLink>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex gap-8">
              <li><NavLink className="text-[#57534e] hover:text-[#ef4444] " to="/home">Home</NavLink></li>
              <li><NavLink className="text-[#57534e] hover:text-[#ef4444]" to="/menu">Menu</NavLink></li>
              <li><NavLink className="text-[#57534e] hover:text-[#ef4444]" to="/myorder">Orders</NavLink></li>
              <li><NavLink className="text-[#57534e] hover:text-[#ef4444]" to="/about">About</NavLink></li>
              <li><NavLink className="text-[#57534e] hover:text-[#ef4444]" to="/contact">Contact</NavLink></li>

              <label className="relative block h-8 w-12">
                <input type="checkbox" className="peer sr-only" onClick={() => dispatch(changeBg())} />
                <span className="absolute inset-0 m-auto h-2 rounded-full bg-gray-300"></span>
                <span className="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-gray-500 transition peer-checked:start-6"></span>
              </label>
            </ul>

            {/* Desktop Login / Signup */}
           <ul className="hidden lg:flex gap-5">

  {!isAuthenticated ? (
    <>
      <li onClick={() => dispatch(showLogin())} className="text-[#ef4444] cursor-pointer">Login</li>
      <li onClick={() => dispatch(showSign())} className="border-2 px-4 py-1 rounded-3xl text-[#ef4444] border-[#ef4444] cursor-pointer">
        Sign Up
      </li>
    </>
  ) : (
    <div className="relative group">
      {/* User Icon */}
      <div
  className="flex items-center gap-2 cursor-pointer"
  onClick={() => setIsProfileOpen(true)}
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
    className="w-8 h-8 rounded-full"
    alt="user"
  />
  <span className="text-[#57534e] font-medium">{loggedUser?.username}</span>
</div>


      
    </div>
  )}

</ul>


            {/* Mobile Hamburger Button */}
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>

          {/* ---------------------- MOBILE MENU ---------------------- */}
          {isOpen && (
            <ul className="lg:hidden mbile flex flex-col gap-4 mt-4 bg-white p-4 rounded shadow-md absolute w-full z-50">

              <li><NavLink to="/home" onClick={() => setIsOpen(false)} className="text-[#57534e] hover:text-[#ef4444]">Home</NavLink></li>
              <li><NavLink to="/menu" onClick={() => setIsOpen(false)} className="text-[#57534e] hover:text-[#ef4444]">Menu</NavLink></li>
              <li><NavLink to="/myorder" onClick={() => setIsOpen(false)} className="text-[#57534e] hover:text-[#ef4444]">Orders</NavLink></li>
              <li><NavLink to="/about" onClick={() => setIsOpen(false)} className="text-[#57534e] hover:text-[#ef4444]">About</NavLink></li>
              <li><NavLink to="/contact" onClick={() => setIsOpen(false)} className="text-[#57534e] hover:text-[#ef4444]">Contact</NavLink></li>

              {/* Theme Toggle */}
              <label className="relative block h-8 w-12">
                <input type="checkbox" className="peer sr-only" onClick={() => dispatch(changeBg())} />
                <span className="absolute inset-0 m-auto h-2 rounded-full bg-gray-300"></span>
                <span className="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-gray-500 transition peer-checked:start-6"></span>
              </label>

              {/* Login/Logout Section */}
            {/* Mobile User Section */}
{isAuthenticated ? (
  <div className="flex flex-col gap-2 p-3  bg-gray-100 rounded-md">

    {/* User info row */}
    <div className="flex items-center gap-3">
      <img
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        className="w-10 h-10 rounded-full"
        alt="user"
      />
      <div>
        <p className="font-semibold text-gray-800 dark:text-gray-100">
          {loggedUser?.username}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {loggedUser?.email}
        </p>
         <p className="text-sm text-gray-500 dark:text-gray-400">
          {loggedUser?.number}
        </p>
      </div>
    </div>

    {/* My Orders Button */}
    <NavLink
      to="/myorder"
      onClick={() => setIsOpen(false)}
      className="text-[#ef4444] font-medium"
    >
      My Orders
    </NavLink>

    {/* Logout Button */}
    <button
      onClick={() => {
        localStorage.removeItem("user");
        localStorage.removeItem("isLoggedIn");
        dispatch(logOut());
        dispatch(showLogin());
        setIsOpen(false);
      }}
      className="bg-red-500 text-white py-1 rounded-md hover:bg-red-600"
    >
      Logout
    </button>

  </div>
) : (
  <>
    <li 
      onClick={() => { dispatch(showLogin()); setIsOpen(false); }}
      className="text-[#ef4444] cursor-pointer"
    >
      Login
    </li>

    <li
      onClick={() => { dispatch(showSign()); setIsOpen(false); }}
      className="text-[#ef4444] border-2 px-4 py-1 rounded-3xl cursor-pointer"
    >
      Sign Up
    </li>
  </>
)}

            </ul>
          )}
        </header>

        {/* MAIN CONTENT */}
        <main>
          <Outlet />
        </main>

        <Footer />
        
      </div>


      {/* USER PROFILE SIDEBAR */}
{isProfileOpen && (
  <div className="fixed inset-0 bg-black/50 z-999" onClick={() => setIsProfileOpen(false)}>
    {/* Sidebar */}
    <div
      className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-5
                 animate-slide-left"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        className="text-gray-600 text-2xl absolute top-4 right-4"
        onClick={() => setIsProfileOpen(false)}
      >
        ×
      </button>

      <div className="mt-10 text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          className="w-20 h-20 rounded-full mx-auto"
          alt="user"
        />
        <h2 className="text-xl font-semibold mt-3">{loggedUser?.username}</h2>
        <p className="text-gray-500">{loggedUser?.email}</p>
        <p className='text-gray-500'>+91 {loggedUser?.number}</p>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-col ">
        <hr className='text-gray-300' />
        <NavLink
          to="/myorder"
          onClick={() => setIsProfileOpen(false)}
          className="text-[#57534e] font-medium mb-1 p-1 hover:text-[#ef4444] "
        >
          My Orders
        </NavLink>
        <hr className='text-gray-300' />

         <NavLink
          to="/address"
          onClick={() => setIsProfileOpen(false)}
          className="text-[#57534e] font-medium mb-1 p-1 hover:text-[#ef4444] "
        >
          Manage Address
        </NavLink><hr className='text-gray-300' />

         <NavLink
          to="/wallet"
          onClick={() => setIsProfileOpen(false)}
          className="text-[#57534e] font-medium mb-1 p-1 hover:text-[#ef4444]  "
        >
         My Wallet
        </NavLink><hr className='text-gray-300' />


         <NavLink
          to=""
          onClick={() => setIsProfileOpen(false)}
          className="text-[#57534e] font-medium p-1 hover:text-[#ef4444] "
        >
          Manage Account
        </NavLink><hr className='text-gray-300 ' />

        
        <div className='flex inset-0  py-80 justify-center items-center'>
          <button
          onClick={() => {
            localStorage.removeItem("user");
            localStorage.removeItem("isLoggedIn");
            dispatch(logOut());
            dispatch(showLogin());
            setIsProfileOpen(false);
          }}
          className="bg-red-500 text-white py-2 w-60 rounded-lg hover:bg-red-600 mb-4"
        >
          Logout
        </button>

        </div>

        
      </div>
    </div>
  </div>
)}


      {/* ---------------------- LOGIN MODAL ---------------------- */}
      {loginValue && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-999">
          <LoginForm />
        </div>
      )}

      {/* ---------------------- SIGNUP MODAL ---------------------- */}
      {signValue && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-999">
          <SignupForm />
        </div>
      )}
    </div>
  );
}

export default Root;
