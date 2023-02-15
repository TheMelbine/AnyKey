import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    searchValue: "",
    categoryId: "All",
    sort: {
        name: ' ▲ popularity',
        sortProperty: 'rating',
        order: 'asc',
    }
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers:{
        setCategoryId(state, action){
            state.categoryId = action.payload
        },
        setSort(state, action){
            state.sort = action.payload
        },
        setSearchValue(state, action){
            state.searchValue = action.payload
        },
    }
});

export const { setCategoryId,setSort,setSearchValue} = filterSlice.actions

export default filterSlice.reducer