import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";
import authSlice from "./Slices/authSlice";
import userSlice from "./Slices/userSlice";


export const store = configureStore({
    reducer:{
        cart : CartSlice.reducer,
        auth: authSlice,
        user: userSlice
    }
});