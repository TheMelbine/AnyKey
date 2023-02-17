import { configureStore } from '@reduxjs/toolkit'
import filterSlice from "./slices/filters/filterSlice";
import keyboardsSlice from './slices/keyboards'
import cartSlice from "./slices/cart";



const store = configureStore({
    reducer: {
        filterSlice,
        keyboardsSlice,
        cartSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store