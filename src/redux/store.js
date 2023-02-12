import { configureStore } from '@reduxjs/toolkit'
import filterSlice from "./slices/filterSlice";
import keyboardsSlice from './slices/keyboards'


export const store = configureStore({
    reducer: {
        filterSlice,
        keyboardsSlice
    },
})