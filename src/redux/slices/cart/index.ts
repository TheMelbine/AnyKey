import {createSlice} from "@reduxjs/toolkit";
import {TCartSlice} from "./types";
import {cartActions} from "./actions";



const initialState: TCartSlice = {
    keyboards: []
}

const cartSlice = createSlice({
    name: 'cart', initialState, reducers: {
        ...cartActions
    }
});

export const cartSliceActions = cartSlice.actions
export default cartSlice.reducer