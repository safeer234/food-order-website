import { createSlice } from "@reduxjs/toolkit";
export const itemSlice = createSlice ({
    name:'items',
    initialState:{
        value:0
    },
    reducers:{
        incrementItem:(state) => {
            state.value += 1
        },
        decrementItem:(state) =>{
            state.value -=1
        }
    }
})
export const {incrementItem, decrementItem } = itemSlice.actions
export default itemSlice.reducer