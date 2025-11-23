import { createSlice } from "@reduxjs/toolkit";
export const toastSlice = createSlice({
    name:'toast',
    initialState:{
        value:false
    },
    reducers:{
        showToast:(state)=>{
            state.value = !state.value
        },hideToast:(state)=>{
            state.value= false
        } 
    }
})
export const {showToast,hideToast} = toastSlice.actions
export default toastSlice.reducer