import { createSlice } from "@reduxjs/toolkit";
export const loginSlice = createSlice ({
    name:'login',
    initialState:{
value:false,
isAuthenticated:false
    },
    reducers:{
        showLogin: (state)=> {
            state.value = true

        },
           hideLogin: (state) => {
      state.value = false;
    },
    loginSuccess:(state) =>{
        state.value = false
        state.isAuthenticated=true
          localStorage.setItem("isLoggedIn", "true");
    },
    logOut:(state) =>{
        state.isAuthenticated=false
    }
       
    }
})
export const {showLogin, hideLogin, loginSuccess, logOut} = loginSlice.actions
export default loginSlice.reducer
