import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    keyboards: []
}

const cartSlice = createSlice({
    name: 'cart', initialState, reducers: {
        setKeyboards(state, action) {
            const newKeyboard = action.payload
            if (!state.keyboards.length) {
                state.keyboards = [{...newKeyboard, count: 1}]
            } else {
                const hasSameKeyboard = !!state.keyboards.find(item => item.id === newKeyboard.id && item.types === newKeyboard.types && item.sizes === newKeyboard.sizes)
                if (hasSameKeyboard) {
                    state.keyboards = state.keyboards.map(item => item.id === newKeyboard.id && item.types === newKeyboard.types && item.sizes === newKeyboard.sizes ? {
                        ...item, count: item.count + 1
                    } : item)
                } else {
                    state.keyboards.push({...newKeyboard, count: 1})
                }
            }
        },
        clearCart(state){
            state.keyboards = []
        }
    }
});

export const cartSliceActions = cartSlice.actions
export default cartSlice.reducer