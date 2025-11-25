import React from 'react'

function Contact() {
  return (
    <div>
     <div className="flex items-center justify-center min-h-screen "> 
  <div className="w-[380px] bg-white rounded-2xl border border-gray-200
                  shadow-[0_25px_60px_rgba(0,0,0,0.3)]
                  p-8">
    
    <div className="text-center text-3xl font-semibold text-[#ef4444] mb-6">
      Contact Us
    </div>

    <form className="space-y-5">
      <input className="border-2 border-gray-300 w-full h-10 rounded-md 
                        placeholder:text-sm px-3"
             type="text" placeholder="Your Name" />

      <input className="border-2 border-gray-300 w-full h-10 rounded-md 
                        placeholder:text-sm px-3"
             type="email" placeholder="Your Email" />

      <textarea className="border-2 border-gray-300 w-full h-24 rounded-md 
                          placeholder:text-sm px-3 pt-2"
                placeholder="Enter Message..." />

      <button className="bg-[#ef4444] w-full duration-300 ease-in-out h-10 rounded-md hover:bg-[#f87171] text-white">
        Submit
      </button>
    </form>

  </div>
</div>

    </div>
  )
}

export default Contact
