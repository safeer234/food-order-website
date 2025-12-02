import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import OrderPlaced from '../components/animated/OrderPlaced';

function Order() {
  const navigate = useNavigate();
  const [showText, setShowText] = useState(false);

  // Redirect to myorder after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/myorder');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  // Show text after icon animation (delay)
  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1500); // Delay 0.8s for example

    return () => clearTimeout(textTimer);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center text-center h-screen'>
      
      <OrderPlaced />

      {/* Show text ONLY after the delay */}
      {showText && (
        <h1 className='text-2xl md:text-6xl font-bold animate-pulse text-[#57534e]'>
          Order placed successfully
        </h1>
      )}

    </div>
  );
}

export default Order;
