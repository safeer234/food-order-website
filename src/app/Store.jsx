import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/CartSlice'
import toggleReducer from '../features/toggle/ToggleSlice';
import loginReducer from '../features/login and signup/LoginSlice'
import searchReducer from '../features/search/SearchSlice'
import sortReducer from '../features/sort/SortSlice'
import checkoutReducer from '../features/checkout/CheckoutSlice'
import toastReducer from '../features/toast/ToastSlice'
import myReducer from '../features/myorder/MySlice'
import authReducer from '../features/auth/AuthSlice'
import signReducer from '../features/login and signup/SignupSlice'
 const store = configureStore({
  reducer: {
cart:cartReducer,
toggle:toggleReducer,
login:loginReducer,
search:searchReducer,
sort:sortReducer,
checkout: checkoutReducer,
toast:toastReducer,
myOrder:myReducer,
auth:authReducer,
sign:signReducer,
  }
  
    
  
})

export default store