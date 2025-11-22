import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    checkoutItem: []
  },
  reducers: {
    addCheckout: (state, action) => {
      state.checkoutItem = action.payload; 
    }
   
  }
});

export const { addCheckout} = checkoutSlice.actions;
export default checkoutSlice.reducer;
