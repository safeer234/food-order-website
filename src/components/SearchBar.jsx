import React from 'react'

function SearchBar() {
  return (
    <div>
       {/* searchbar */}

   <div className="border-2 rounded-2xl flex  items-center gap-2 px-3 h-9 border-[#57534e] w-100 max-w-sm">
  <input
    className="flex-1 outline-none"
    placeholder="Search for food items"
    type="text"
  />
  <i className="bx bx-search text-[#57534e] text-xl"></i>
</div>
 {/* searchbar */}

         
    </div>
  )
}

export default SearchBar
