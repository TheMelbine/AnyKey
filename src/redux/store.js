import { configureStore } from '@reduxjs/toolkit'
import filterSlice from "./slices/filterSlice";
import keyboardsSlice from './slices/keyboards'
import cartSlice from "./slices/cartSlice";


export const store = configureStore({
    reducer: {
        filterSlice,
        keyboardsSlice,
        cartSlice,
    },
})