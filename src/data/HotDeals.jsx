import React from 'react'
import { useSelector } from 'react-redux'
import DealsCard from '../components/DealsCard'
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
import chickencircle from '../assets/images/foodcircleimages/chicken burger.jpg'
import frenchcircle from '../assets/images/foodcircleimages/french fries.jpg'
import pizzacircle from '../assets/images/foodcircleimages/pizza.jpg'
import nuggetscircle from '../assets/images/foodcircleimages/nuggets.jpg'

function HotDeals() {
  const searchValue = useSelector((state) => state.search.value.toLowerCase())
  const sortType = useSelector((state) => state.sort.type)

  const deals = [
   { id: 1, image: momoscircle, name: "Momos", price: 110, qty: 1, hotel:"Let's Bake" },
{ id: 2, image: chipscircle, name: "Fried Chips", price: 100, qty: 1, hotel:"Choice Cafe" },
{ id: 3, image: shrimpscircle, name: "Fried Shrimps", price: 140, qty: 1, hotel:"Choice Cafe" },
{ id: 4, image: shawarmacircle, name: "Shawarma", price: 120, qty: 1, hotel:"Shawarmax" },
{ id: 5, image: loadedcircle, name: "Loaded Fries", price: 140, qty: 1, hotel:"Western Bakes" },
{ id: 6, image: wrapcircle, name: "Chicken Wrap", price: 110, qty: 1, hotel:"Let's Bake" },
{ id: 7, image: zingercircle, name: "Zinger Burger", price: 130, qty: 1, hotel:"Western Bakes" },
{ id: 8, image: popscircle, name: "Chicken Pops", price: 120, qty: 1, hotel:"Hunger Broast" },
{ id: 9, image: vegcircle, name: "Veg Burger", price: 135, qty: 1, hotel:"Fry Gust" },
{ id: 10, image: tacocircle, name: "Tacos", price: 124, qty: 1, hotel:"Let's Bake" },
{ id: 11, image: alfahamcircle, name: "Alfaham", price: 120, qty: 1, hotel:"Top Chicken" },
{ id: 12, image: drinkscircle, name: "Pepsi", price: 90, qty: 1, hotel:"Fry Gust" },
{ id: 13, image: chickencircle, name: "Chicken Burger", price: 40, qty: 1, hotel:"Western Bakes" },
{ id: 14, image: frenchcircle, name: "French Fries", price: 70, qty: 1, hotel:"Choice Cafe" },
{ id: 15, image: pizzacircle, name: "Pizza", price: 145, qty: 1, hotel:"Looco's Pizza" },
{ id: 16, image: nuggetscircle, name: "Chicken Nuggets", price: 118, qty: 1, hotel:"Hunger Broast" },

  ]

 
  let filteredDeals = deals.filter((item) =>
    item.name.toLowerCase().includes(searchValue)
  )

 
  if (sortType === "lowToHigh") {
    filteredDeals = filteredDeals.sort(
      (a, b) => parseInt(a.price) - parseInt(b.price)
    )
  }

  if (sortType === "highToLow") {
    filteredDeals = filteredDeals.sort(
      (a, b) => parseInt(b.price) - parseInt(a.price)
    )
  }

  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 px-4 scroll-smooth scrollbar-hide">
      {filteredDeals.length > 0 ? (
        filteredDeals.map((deal) => (
          <div key={deal.id} className="snap-center bg-[white] w-65 md:w-75 lg:w-75  shadow-2xl   text-[#57534e] pb-4 rounded-3xl">
            <DealsCard deal={deal} />
          </div>
        ))
      ) : (
        <p className="text-red-500 font-semibold">No Results Found</p>
      )}
    </div>
  )
}

export default HotDeals
