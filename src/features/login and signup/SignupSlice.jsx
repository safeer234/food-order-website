import { createSlice } from "@reduxjs/toolkit";
export const signSlice = createSlice ({
    name:'sign',
    initialState:{
value:false,
isAuthenticated:false
    },
    reducers:{
        showSign: (state)=> {
            state.value = !state.value

        },
           hideSign: (state) => {
      state.value = false;
    },
    signSuccess:(state) =>{
        state.value = false
        state.isAuthenticated=true
    },
    logOut:(state) =>{
        state.isAuthenticated=false
    }
       
    }
})
export const {showSign, hideSign, signSuccess, logOut} = signSlice.actions
export default signSlice.reducer