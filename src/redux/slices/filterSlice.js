import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    searchValue: "",
    categoryId: 0,
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

export const { setCategoryId,setSort,setSearchValue, setCurrentPage } = filterSlice.actions

export default filterSlice.reducer