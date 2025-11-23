import { createSlice } from "@reduxjs/toolkit";
export const mySlice = createSlice({
    name:'myOrder',
    initialState:{
        orders:[]
    },
    reducers:{
        addOrder:(state,action)=>{
            state.orders = action.payload;
        },
        clearOrders:(state)=>{
            state.orders=[]
        }
    }
})
export const {addOrder,clearOrders} = mySlice.actions
export default mySlice.reducer
