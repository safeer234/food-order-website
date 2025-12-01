import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Order() {
  const navigate = useNavigate();
  useEffect(()=> {
    const timer = setTimeout(()=>{
      navigate('/myorder');
return () => clearTimeout(timer)
    },3000)
  },[navigate])
  return (
    <div className='flex flex-col items-center justify-center text-center h-screen'>
      <i className='bx bx-badge-check animate-bounce text-6xl md:text-9xl lg:text-9xl text-green-500 mb-6'></i>
      <h1 className=' text-2xl  md:text-6xl lg:text-6xl font-bold animate-pulse text-green-500'>Order placed successfully</h1>
     



    </div>
  );
}

export default Order;
