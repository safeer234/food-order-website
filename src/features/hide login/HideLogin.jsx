import { createSlice } from "@reduxjs/toolkit";
export const hideSlice = createSlice ({
    name:'hide',
    initialState:{
value:true
    },
    reducers:{
        hideLogin: (state)=> {
            state.value = !state.value

        },
       
    }
})
export const {hideLogin} = hideSlice.actions
export default hideSlice.reducer