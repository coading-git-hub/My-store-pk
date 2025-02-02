"use client"
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartslice";

const store = configureStore({
    reducer:{
        cart: cartReducer,
    },
});
export type RootStore = ReturnType<typeof store.getState>;
export type APPDispatch = typeof store.dispatch;

export default store;