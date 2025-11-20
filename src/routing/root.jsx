import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Root() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="shadow-md">
        <nav className="flex justify-between items-center px-6 py-4">
          
          
          <div>
            <NavLink to='/home' className="font-bold text-[#57534e] text-2xl">
              Serve<span className='text-[#ef4444]'>It</span>
            </NavLink>
          </div>

         
          <ul className="hidden lg:flex gap-10 text-[#57534e]">
            <li className="hover:text-[#ef4444]"><NavLink to='/home'>Home</NavLink></li>
            <li className="hover:text-[#ef4444]"><NavLink to='/menu'>Menu</NavLink></li>
            <li className="hover:text-[#ef4444]"><NavLink to='/services'>Services</NavLink></li>
            <li className="hover:text-[#ef4444]"><NavLink to='/about'>About</NavLink></li>
            <li className="hover:text-[#ef4444]"><NavLink to='/contact'>Contact</NavLink></li>
          </ul>

          
          <ul className="hidden lg:flex gap-6">
            <li className='text-[#ef4444]'><NavLink>Login</NavLink></li>
            <li className='border-[#ef4444] text-[#ef4444] border-2 px-4 py-1 rounded-3xl'>
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
      <Outlet />
    </div>
  )
}

export default Root;
