import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice ({
    name:'toggle',
    initialState:{
       value: false
    },
    reducers:{
        changeBg: (state)=>{
            state.value = !state.value;

        }
    }
})
export const {changeBg} = toggleSlice.actions
export default toggleSlice.reducer