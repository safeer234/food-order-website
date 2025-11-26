import React from 'react'
import { useState } from 'react'
function Contact() {
    const [focus, setFocus] = useState({
    errName: false,
    errEmail: false,
   

  })
const [inputs, setInputs] = useState({
  name: '',
  email:'',
 
  

})
const handleSubmit = (e) => {
e.preventDefault();
}
const handleChange = (e) => {
  const name = e.target.name
  const value = e.target.value
  setInputs({...inputs, [name]: value})
}
  return (
    <div>

      {/* Full screen center alignment for the form */}
      <div className="flex items-center justify-center min-h-screen "> 
        
        {/* Contact form container with border, shadow and rounded corners */}
        <div className="w-[380px] bg-white rounded-2xl border border-gray-200
                        shadow-[0_25px_60px_rgba(0,0,0,0.3)]
                        p-8">
           {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div className="text-center text-3xl font-semibold text-[#ef4444] mb-6">
            Contact Us
          </div>

         
            
            {/* Input - Name field */}
            <input className="border-2 border-gray-300 w-full h-10 rounded-md 
                              placeholder:text-sm px-3"
                  type="text" placeholder="Your Name" name = 'name' 
    value ={inputs.name} 
    onChange={handleChange} 
    pattern="^[A-Za-z0-9]{3,16}$" 
    onBlur={()=> setFocus({...focus, errName: true })} 
    focus = {focus.errName.toString()} 
    required />

            {/* Input - Email field */}
            <input className="border-2 border-gray-300 w-full h-10 rounded-md 
                              placeholder:text-sm px-3"
                  type="email" placeholder="Your Email"  name = 'email'
     value ={inputs.email}
     onChange={handleChange}
     pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
     onBlur={()=> setFocus({...focus, errEmail: true })} 
     focus = {focus.errEmail.toString()} 
     required   />

            {/* Text area for message */}
            <textarea className="border-2 border-gray-300 w-full h-24 rounded-md 
                                placeholder:text-sm px-3 pt-2"
                    placeholder="Enter Message..."  name = 'email'
     value ={inputs.message}
   
     required   />

            {/* Submit button */}
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
