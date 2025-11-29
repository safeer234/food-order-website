import { createSlice } from "@reduxjs/toolkit";

const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];

export const mySlice = createSlice({
  name: "myOrder",
  initialState: {
    orders: savedOrders,
  },
  reducers: {
    addOrder: (state, action) => {
      const order = action.payload;

      // If payload is an array -> add each item separately
      if (Array.isArray(order)) {
        order.forEach(o => state.orders.push(o));
      } else {
        // Single order object
        state.orders.push(order);
      }

      // Save updated list
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },

    clearOrders: (state) => {
      state.orders = [];
      localStorage.setItem("orders", JSON.stringify([]));
    },
  },
});

export const { addOrder, clearOrders } = mySlice.actions;
export default mySlice.reducer;
