import React from 'react'

function Order() {
  return (
    <div className='flex flex-col items-center justify-center text-center h-screen'>
      <i className='bx bx-badge-check animate-bounce text-9xl text-green-500 mb-6'></i>
      <h1 className='text-6xl font-bold animate-pulse text-green-500'>Order placed successfully</h1>
    </div>
  );
}

export default Order;
