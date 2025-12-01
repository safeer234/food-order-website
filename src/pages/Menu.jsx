import React from 'react'
import SearchBar from '../components/SearchBar'
import { Link } from 'react-router-dom'
import FoodCircle from '../data/FoodCircle'
import HotDeals from '../data/HotDeals'
import { useSelector, useDispatch } from 'react-redux'
import { setSortType } from '../features/sort/SortSlice'
import RestaurantDetails from '../data/RestaurantDetails'

function Menu() {

  const searchText = useSelector((state) => state.search.value.toLowerCase());
  const dispatch = useDispatch();
 const cartItems = useSelector((state)=> state.cart.cartItems.length > 0);
 const value = useSelector((state)=>state.cart.value);
const showDiv = useSelector((state)=> state.toast.value)
  return (
    <div>
      <div hidden={!showDiv} className='flex z-1   fixed items-center  justify-center  px-46 sm:px-46 md:px-142 lg:px-320 py-0 sm:py-0 md:py-110 lg:py-0'>
<p className='bg-[white] border shadow-xl w-45 items-center flex justify-center gap-0.5 rounded-sm'><i className='bxr text-[green] bx-check-circle'></i> item added to the cart</p>
      </div>

     
      <div className="flex py-10 justify-around sm:justify-around md:justify-between lg:justify-between">
        <div className="flex items-center px-4 sm:px-4 lg:px-15 gap-0 sm:gap-0 lg:gap-6">
          <SearchBar />

          
          <div className="flex gap-4 sm:gap-6">

           
            <details className="group relative">
              <summary className="flex items-center gap-2 border-b border-gray-300 pb-1 text-gray-700 cursor-pointer">
                <span className="text-sm font-medium">  </span>
                <span className="transition-transform group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                    className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>

              <div className="absolute top-8 w-30 sm:w-30 md:w-56 lg:w-56 bg-white border shadow-sm rounded divide-y divide-gray-300 z-10">

                
                <div className="flex flex-col p-3 gap-2 text-sm text-gray-800">
                  <button 
                    className="text-left hover:text-red-500"
                    onClick={() => dispatch(setSortType("lowToHigh"))}
                  >
                    Price: Low → High
                  </button>

                  <button 
                    className="text-left hover:text-red-500"
                    onClick={() => dispatch(setSortType("highToLow"))}
                  >
                    Price: High → Low
                  </button>

                  <button 
                    className="text-left text-gray-600 hover:text-black"
                    onClick={() => dispatch(setSortType("none"))}
                  >
                    Reset Sorting
                  </button>
                </div>

              </div>
            </details>

          </div>
        </div>

        
        <div className="px-0 sm:px-0 md:px-10 lg:px-20 flex">
          <Link to="/cart">
            <i className="bx bx-cart text-[#57534e] text-4xl"></i>
          </Link>
          
          <p  hidden={!cartItems} className='  bg-[#ef4444] absolute z-50 ml-6 mt-1.2 text-sm flext text-center justify center rounded-2xl h-4.5 w-4.5'>{value}</p>
        </div>
      </div>

      
      {!searchText && (
        <>
          <FoodCircle />

          <div className="flex justify-between px-15 py-16">
            <h3 className="text-[#57534e] font-semibold">Hot Deals 🔥</h3>
            <p className="text-[#ef4444] cursor-pointer">See All</p>
          </div>
        </>
      )}

      
      <HotDeals />

      <div className='px-15 py-16'>
        <h3 className='text-[#57534e] font-semibold'>Explore Restaurants 🍽️</h3>
      </div>

      <RestaurantDetails />
    </div>
  )
}

export default Menu
