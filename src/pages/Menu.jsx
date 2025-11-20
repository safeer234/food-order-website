import React from 'react'
import SearchBar from '../components/SearchBar'
import { Link } from 'react-router-dom'
import FoodCircle from '../data/FoodCircle'
import HotDeals from '../data/HotDeals'





function Menu() {

  return (
    <div>

      {/* searchbar and cart icon */}
      <div className="flex py-10 justify-between">

        <div className="flex items-center px-15 gap-6">
          <SearchBar />

          {/* Dropdown filters */}
          <div className="flex gap-4 sm:gap-6">

            {/* Availability dropdown */}
            <details className="group relative">
              <summary className="flex items-center gap-2 border-b border-gray-300 pb-1 text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900 [&::-webkit-details-marker]:hidden">
                <span className="text-sm font-medium"> Availability </span>
                <span className="transition-transform group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                  </svg>
                </span>
              </summary>

              <div className="z-auto w-64 divide-y divide-gray-300 rounded border border-gray-300 bg-white shadow-sm group-open:absolute group-open:start-0 group-open:top-8">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-sm text-gray-700"> 0 Selected </span>
                  <button type="button" className="text-sm text-gray-700 underline transition-colors hover:text-gray-900">
                    Reset
                  </button>
                </div>

                <fieldset className="p-3">
                  <div className="flex flex-col items-start gap-3">
                    {[1, 2, 3].map(n => (
                      <label key={n} className="inline-flex items-center gap-3">
                        <input type="checkbox" className="size-5 rounded border-gray-300 shadow-sm" />
                        <span className="text-sm font-medium text-gray-700"> Option {n} </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>
            </details>

            {/* Price dropdown */}
            <details className="group relative">
              <summary className="flex items-center gap-2 border-b border-gray-300 pb-1 text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900 [&::-webkit-details-marker]:hidden">
                <span className="text-sm font-medium"> Price </span>
                <span className="transition-transform group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                  </svg>
                </span>
              </summary>

              <div className="z-auto w-64 divide-y divide-gray-300 rounded border border-gray-300 bg-white shadow-sm group-open:absolute group-open:start-0 group-open:top-8">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-sm text-gray-700"> Max price is ₹600 </span>
                  <button type="button" className="text-sm text-gray-700 underline transition-colors hover:text-gray-900">
                    Reset
                  </button>
                </div>

                <div className="flex items-center gap-3 p-3">
                  <label>
                    <span className="text-sm text-gray-700"> Min </span>
                    <input type="number" className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" />
                  </label>

                  <label>
                    <span className="text-sm text-gray-700"> Max </span>
                    <input type="number" className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" />
                  </label>
                </div>
              </div>
            </details>
          </div>

        </div>

        {/* Cart icon */}
        <div className="px-20">
          <Link to="/cart">
          <div className=''>
            <i className="bx bx-cart  text-[#57534e] text-3xl"></i>

          </div>
            
          </Link>
        </div>

      </div>
      {/* food circle */}

      <div>
       <FoodCircle />
      </div>
      {/* foodcircle */}

      <div className='flex justify-between px-15 py-16'>
        <h3 className='text-[#57534e] font-semibold'>Hot Deals 🔥</h3>
        <p className='text-[#ef4444]'>See All</p>

      </div>

      {/*  deals */}

      <div >
        <HotDeals />

      </div>
      {/*  deals */}
      
      

    </div>
  )
}

export default Menu
