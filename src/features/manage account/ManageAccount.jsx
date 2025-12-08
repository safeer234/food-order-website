import { createSlice } from "@reduxjs/toolkit";
export const manageSlice = createSlice({
    name:'manage',
    initialState:{
        value:false,
       
    },
    reducers:{
        showDiv:(state) =>{
            state.value = true
        },
        hideDiv:(state) =>{
            state.value = false
        },
        
    }
})
export const {showDiv, hideDiv, deleteAccount} = manageSlice.actions
export default manageSlice.reducer