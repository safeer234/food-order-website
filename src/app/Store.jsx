import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/CartSlice'
import toggleReducer from '../features/theme/themeSlice'
import itemReducer from '../features/item/ItemSlice'

 const store = configureStore({
  reducer: {
cart:cartReducer,
toggle:toggleReducer,
items:itemReducer
  }
  
    
  
})

export default store