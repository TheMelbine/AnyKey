import {createSlice} from "@reduxjs/toolkit";
import {keyboardsSliceActions} from "./actions";


const initialState = {
    totalCount: 0,
    keyboards: [],
    isLoading: true,
    error: null,
}

const keyboardsSlice = createSlice({
    name: 'keyboards',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(keyboardsSliceActions.fetchKeyboards.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(keyboardsSliceActions.fetchKeyboards.fulfilled, (state, action) => {
            state.keyboards = action.payload.data
            state.totalCount = action.payload.headers["x-total-count"]
            state.isLoading = false
        })
        builder.addCase(keyboardsSliceActions.fetchKeyboards.rejected, (state, action) => {
            state.isLoading = true
            state.error = action?.error?.message
        })
    }
})

export default keyboardsSlice.reducer