import React from 'react'
import SearchBar from '../components/SearchBar'
import { Link } from 'react-router-dom'
import FoodCircle from '../data/FoodCircle'
import HotDeals from '../data/HotDeals'
import { useSelector, useDispatch } from 'react-redux'
import { setSortType } from '../features/sort/SortSlice'

function Menu() {

  const searchText = useSelector((state) => state.search.value.toLowerCase());
  const dispatch = useDispatch();
 const cartItems = useSelector((state)=> state.cart.cartItems.length > 0);
const showDiv = useSelector((state)=> state.toast.value)
  return (
    <div>
      <div hidden={!showDiv} className='flex z-1 transition-opacity opacity-8 duration-300  fixed items-center  justify-center  px-320 '>
<p className='bg-[white] border shadow-xl w-45 items-center flex justify-center gap-0.5 rounded-sm'><i className='bxr text-[green] bx-check-circle'></i> item added to the cart</p>
      </div>

     
      <div className="flex py-10 justify-between">
        <div className="flex items-center px-15 gap-6">
          <SearchBar />

          
          <div className="flex gap-4 sm:gap-6">

           
            <details className="group relative">
              <summary className="flex items-center gap-2 border-b border-gray-300 pb-1 text-gray-700 cursor-pointer">
                <span className="text-sm font-medium"> Price </span>
                <span className="transition-transform group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                    className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>

              <div className="absolute top-8 w-56 bg-white border shadow-sm rounded divide-y divide-gray-300 z-10">

                
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

        
        <div className="px-20 flex">
          <Link to="/cart">
            <i className="bx bx-cart text-[#57534e] text-3xl"></i>
          </Link>
          
          <p hidden={!cartItems} className='  bg-[#ef4444] absolute z-50 ml-6 mt-1.5  flext text-center justify center rounded-2xl h-2.5 w-2.5'></p>
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
    </div>
  )
}

export default Menu
