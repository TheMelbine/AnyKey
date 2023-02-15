import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    keyboards: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setKeyboards(state, action) {
            state.keyboards = [...state.keyboards, action.payload]
        }
    }
});

export const {setKeyboards} = cartSlice.actions
export default cartSlice.reducer