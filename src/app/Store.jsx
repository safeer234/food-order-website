import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/CartSlice'
import toggleReducer from '../features/toggle/ToggleSlice';
import itemReducer from '../features/item/ItemSlice'
import loginReducer from '../features/login and signup/LoginSlice'
import searchReducer from '../features/search/SearchSlice'
import sortReducer from '../features/sort/SortSlice'
import checkoutReducer from '../features/checkout/CheckoutSlice'
 const store = configureStore({
  reducer: {
cart:cartReducer,
toggle:toggleReducer,
items:itemReducer,
login:loginReducer,
search:searchReducer,
sort:sortReducer,
checkout: checkoutReducer

  }
  
    
  
})

export default store