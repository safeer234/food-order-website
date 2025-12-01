import React from 'react'
import RestaurantCard from '../components/RestaurantCard'
import Shawarmaximg from '../assets/images/restaurant img/shawarmax.jpg'
import hungerimg from '../assets/images/restaurant img/hungerbroast.jpg'
import choiceimg from '../assets/images/restaurant img/choicecafe.jpg'
import letsbakeimg from '../assets/images/restaurant img/letsbake.jpg'
import westernimg from '../assets/images/restaurant img/westernbakes.jpg'
import frygustimg from '../assets/images/restaurant img/frygust.jpg'
import topimg from '../assets/images/restaurant img/topchicken.jpg'
import loocosimg from '../assets/images/restaurant img/loocospizza.jpg'
function RestaurantDetails() {
  const restaurants = [
    {id:1, image:Shawarmaximg , name:'Shawarmax' , location:'....'},
     {id:2, image:hungerimg , name:'Hunger Broast' , location:'....'},
     {id:3, image:choiceimg , name:'Choice Cafe' , location:'....'},
     {id:4, image:letsbakeimg , name:"Let's Bake" , location:'....'},
     {id:5, image:westernimg , name:'Western Bakes' , location:'....'},
     {id:6, image:frygustimg , name:'Fry Gust' , location:'....'},
     {id:7, image:topimg , name:'Top Chicken' , location:'....'},
     {id:8, image:loocosimg , name:"Looco's Pizza" , location:'....'},
    
   
  ]
   
  return (
    <div className=' block lg:grid md:block lg:grid-cols-2  lg:grid-rows-5 px-3 lg:px-38 md:px-5 gap-15  '>
      {restaurants.map((restaurant, index)=>{
        return(
          <div className='flex bg-[#d4d4d4] shadow-2xl w-85 lg:w-150 md:w-180 mb-6 lg:mb-0 md:mb-6  rounded-2xl duration-300 ease-in  active:translate-y-1.5 active:scale-90
  hover:scale-95 '>
            <RestaurantCard restaurant={restaurant} key={index} />
          </div>

        )
      })}
    </div>
  )
}

export default RestaurantDetails
