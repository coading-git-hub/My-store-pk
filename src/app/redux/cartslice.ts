"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem{
    _id: string;
    productName:string;
    _type: string;
    image?:{
        asset:{
            _ref: string;
            _type: string;
        }
    };
    price: number;
    decrption: 'text';
}

const cartSlice =createSlice({
    name: "cart",
    initialState: [] as CartItem[],
    reducers: {
        add(state, action: PayloadAction<CartItem>){
            state.push(action.payload);
        },
        remove(state, action:PayloadAction<string>){
            return state.filter((product) =>product._id  !== action.payload);
        },
    },
});

export const { add, remove } =cartSlice.actions;
export default cartSlice.reducer