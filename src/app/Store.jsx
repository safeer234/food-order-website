import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/CartSlice'
import toggleReducer from '../features/toggle/ToggleSlice';
import itemReducer from '../features/item/ItemSlice'
import loginReducer from '../features/login and signup/LoginSlice'

 const store = configureStore({
  reducer: {
cart:cartReducer,
toggle:toggleReducer,
items:itemReducer,
login:loginReducer,

  }
  
    
  
})

export default store