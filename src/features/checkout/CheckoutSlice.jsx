import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    checkoutItem: []
  },
  reducers: {
    addCheckout: (state, action) => {
      state.checkoutItem = action.payload; 
    },
    clearCheckout:(state)=>{
      state.checkoutItem= []
    }
   
  }
});

export const { addCheckout, clearCheckout} = checkoutSlice.actions;
export default checkoutSlice.reducer;
