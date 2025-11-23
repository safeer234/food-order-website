import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice ({
    name: 'cart',
    initialState:{
        cartItems:[]
    },
    reducers:{
       addFood: (state, action) => {
    const existingItem = state.cartItems.find(item => item.id === action.payload.id);

    if (existingItem) {
        existingItem.qty += 1; 
    } else {
        state.cartItems.push({ ...action.payload, qty: 1 }); 
    }
   
},
incrementItem: (state, action) => {
    const item = state.cartItems.find(i => i.id === action.payload);
    if (item) item.qty += 1;
},
decrementItem: (state, action) => {
    const item = state.cartItems.find(i => i.id === action.payload);
    if (!item) return;

    if (item.qty > 1) {
        item.qty -= 1;
    } else {
        state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
    }
},

        clearCart:(state) => {
            state.cartItems=[]
        }
    }
})

export const {addFood, clearCart, incrementItem, decrementItem} = cartSlice.actions
export default cartSlice.reducer