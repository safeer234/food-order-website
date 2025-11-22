import React from 'react'
import { useDispatch } from 'react-redux'
import { handleSearch } from '../features/search/SearchSlice'

function SearchBar() {
  const dispatch = useDispatch()

  return (
    <div>
      <div className="border-2 rounded-2xl flex items-center gap-2 px-3 h-9 border-[#57534e] w-full max-w-sm">
        <input
          className="flex-1 outline-none"
          placeholder="Search Hot Deals..."
          type="text"
          onChange={(e) => dispatch(handleSearch(e.target.value))}
        />
        
        <i className="bx bx-search text-[#57534e] text-xl"></i>
        
      </div>
    </div>
  )
}

export default SearchBar
