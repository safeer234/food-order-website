import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice ({
    name: 'cart',
    initialState:{
        cartItems:[]
    },
    reducers:{
        addFood: (state, action) => {
            state.cartItems.push(action.payload)
            alert("item added to the cart")
        },
        clearCart:(state) => {
            state.cartItems=[]
        }
    }
})

export const {addFood, clearCart} = cartSlice.actions
export default cartSlice.reducer