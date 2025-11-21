import React from 'react'
import homefoodimg1 from '../assets/images/homefoodimg/1000_F_1599070058_g1P7zQoEDxZvN4ErwdJ0HKyFfQ7DF7QB.jpg'
import homefoodimg2 from '../assets/images/homefoodimg/1000_F_300233026_dIJcI3ry93imSyDqHM0z4naEGaTedJ07.jpg'
import homefoodimg3 from '../assets/images/homefoodimg/1000_F_726813091_9yK4aWhJXPs3gz594mdxRxZ1akTUOinC.jpg'
import nuggetscircle from '../assets/images/foodcircleimages/nuggets.jpg'
import momoscircle from '../assets/images/foodcircleimages/momos.jpg'
import chipscircle from '../assets/images/foodcircleimages/fried chips.jpg'
import shrimpscircle from '../assets/images/foodcircleimages/fried shrimps.jpg'
import shawarmacircle from '../assets/images/foodcircleimages/shawarma.jpg'
import loadedcircle from '../assets/images/foodcircleimages/Loaded fries.jpg'
import zingercircle from '../assets/images/foodcircleimages/zinger burger.jpg'
import popscircle from '../assets/images/foodcircleimages/chicken pops.jpg'
import wrapcircle from '../assets/images/foodcircleimages/chicken wrap.jpg'
import vegcircle from '../assets/images/foodcircleimages/veg burger.jpg'
import tacocircle from '../assets/images/foodcircleimages/tacos.jpg'
import alfahamcircle from '../assets/images/foodcircleimages/alfaham.webp'
import drinkscircle from '../assets/images/foodcircleimages/cool drinks.jpg'
import DealsCard from '../components/DealsCard'

function HotDeals() {
    const deals = [
       {
        id:1,
                   image:momoscircle,
                   name: 'Momos',
                   price:'₹110',
       
               },
               {
                id:2,
                   image:chipscircle,
                   name: 'Fried chips',
                   price:'₹100',
               },
               {
                id:3,
                   image:shrimpscircle,
                   name: 'Fried Shrimps',
                   price:'₹140',
       
               },
               {
                id:4,
                   image:shawarmacircle,
                   name: 'Shawarma',
                   price:'₹120',
       
               },
               {
                id:5,
                   image:loadedcircle,
                   name: 'Loaded Fries',
                   price:'₹140',
       
               },
               {
                id:6,
                   image:wrapcircle,
                   name: 'Chicken Wrap',
                   price:'₹110',
       
               },
               {
                id:7,
                   image:zingercircle,
                   name: 'Zinger Burger',
                   price:'₹130',
       
               },
               {
                id:8,
                   image:popscircle,
                   name: 'Chicken Pops',
                   price:'₹120',
       
               },
               {
                id:9,
                   image:vegcircle,
                   name: 'Veg Burger',
                   price:'135',
       
               },
               {
                id:10,
                   image:tacocircle,
                   name: 'Tacos',
                   price:'₹124',
       
               },
               {
                id:11,
                   image:alfahamcircle,
                   name: 'Alfaham',
                   price:'₹120',
       
               },
               {
                id:12,
                   image:drinkscircle,
                   name: 'Pepsi',
                   price:'₹90',
       
               },
                {
                    id:13,
                           image: homefoodimg1 ,
                           name: 'Chicken Burger',
                           price:'₹140',
               
                       },
                        {
                            id:14,
                           image:homefoodimg2,
                           name: 'French Fries',
                           price:'₹70',
               
                       },
                        {
                            id:15,
                           image:homefoodimg3,
                           name: 'Pizza',
                           price:'₹145',
               
                       },
                        {
                            id:16,
                           image:nuggetscircle,
                           name: 'Chicken Nuggets',
                           price:'₹118',
               
                       },
        
    ]
  return (
    <div className='grid grid-cols-4   snap-x   gap-4 px-15'>
{deals.map((deal, index) => {
return(
    <div className=' dealscard snap-center  bg-[#fef2f2] shadow-xl text-[#57534e]  h-100 shadow-stone-300 p-4 rounded-3xl'>
        <DealsCard deal = {deal} key={index} />
        </div>
)

})}
      
    </div>
  )
}

export default HotDeals
