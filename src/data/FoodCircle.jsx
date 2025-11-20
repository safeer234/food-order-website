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

import FoodCircles from '../components/FoodcCircles'
function FoodCircle() {
     const foodCircle = [
        {
            image: homefoodimg1 ,
            name: 'Chicken Burger'

        },
         {
            image:homefoodimg2,
            name: 'French Fries'

        },
         {
            image:homefoodimg3,
            name: 'Pizza'

        },
         {
            image:nuggetscircle,
            name: 'Chicken Nuggets'

        },
        {
            image:momoscircle,
            name: 'Momos'

        },
        {
            image:chipscircle,
            name: 'Fried chips'
        },
        {
            image:shrimpscircle,
            name: 'Fried Shrimps'

        },
        {
            image:shawarmacircle,
            name: 'Shawarma'

        },
        {
            image:loadedcircle,
            name: 'Loaded Fries'

        },
        {
            image:wrapcircle,
            name: 'Chicken Wrap'

        },
        {
            image:zingercircle,
            name: 'Zinger Burger'

        },
        {
            image:popscircle,
            name: 'Chicken Pops'

        },
        {
            image:vegcircle,
            name: 'Veg Burger'

        },
        {
            image:tacocircle,
            name: 'Tacos'

        },
        {
            image:alfahamcircle,
            name: 'Alfaham'

        },
        {
            image:drinkscircle,
            name: 'Cool Drinks'

        },

    ]
  return (
    <div className='grid gap-10 grid-cols-8 grid-rows-2 py- px-13 '>
         {foodCircle.map((foodCircle, index) => {
        return(
            <div className='hover:translate-y-1.2'>
                <FoodCircles foodCircle = {foodCircle} key={index} />
            </div>
        )

      })}
      
    </div>
  )
}

export default FoodCircle
