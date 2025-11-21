import { createSlice } from "@reduxjs/toolkit";
export const loginSlice = createSlice ({
    name:'login',
    initialState:{
value:false
    },
    reducers:{
        showLogin: (state)=> {
            state.value = !state.value

        },
       
    }
})
export const {showLogin} = loginSlice.actions
export default loginSlice.reducer