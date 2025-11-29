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

  // blur background if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(showLogin());
    }
  }, [isAuthenticated, dispatch]);


  return (
    <div className={toggleValue ? "dark" : ""}>

      {/* ---------------------- UI Blur Before Login ---------------------- */}
      <div className={`transition-all ${!isAuthenticated ? "blur-3xl opacity-40" : ""}`}>

        {/* HEADER */}
        <header className="shadow-md bg-white dark:bg-gray-900 dark:text-gray-100 relative">
          <nav className="flex justify-between items-center px-6 py-4">

            {/* Logo */}
            <NavLink to="/home" className="font-bold text-[#57534e] text-2xl">
              Serve<span className="text-[#ef4444]">It</span>
            </NavLink>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex gap-8">
              <li><NavLink className="text-[#57534e] hover:text-[#ef4444]" to="/home">Home</NavLink></li>
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
                <li
                  onClick={() => {
                    localStorage.removeItem("user");
                    localStorage.removeItem("isLoggedIn");
                    dispatch(logOut());
                  }}
                  className="text-white bg-red-500 px-4 py-1 rounded-3xl duration-300 hover:bg-white hover:text-[#ef4444] hover:border-2 hover:border-[#ef4444] cursor-pointer"
                >
                  Logout
                </li>
              )}
            </ul>

            {/* Mobile Hamburger Button */}
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>

          {/* ---------------------- MOBILE MENU ---------------------- */}
          {isOpen && (
            <ul className="lg:hidden flex flex-col gap-4 mt-4 bg-white dark:bg-gray-900 p-4 rounded shadow-md absolute w-full z-50">

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
              {!isAuthenticated ? (
                <>
                  <li onClick={() => { dispatch(showLogin()); setIsOpen(false); }} className="text-[#ef4444] cursor-pointer">Login</li>
                  <li onClick={() => { dispatch(showSign()); setIsOpen(false); }} className="text-[#ef4444] border-2 px-4 py-1 rounded-3xl cursor-pointer">Sign Up</li>
                </>
              ) : (
                <li
                  onClick={() => {
                    localStorage.removeItem("user");
                    localStorage.removeItem("isLoggedIn");
                    dispatch(logOut());
                    setIsOpen(false);
                  }}
                  className="text-white bg-red-500 px-4 py-1 rounded-3xl"
                >
                  Logout
                </li>
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
