import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TSortItem, TFilterSlice} from "./types";


const initialState: TFilterSlice = {
    searchValue: "",
    categoryId: "All",
    sort: {
        name:' ▲ popularity',
        sortProperty: 'rating',
        order: 'asc',
    }
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers:{
        setCategoryId(state, action: PayloadAction<string>){
            state.categoryId = action.payload
        },
        setSort(state, action: PayloadAction<TSortItem>){
            state.sort = action.payload
        },
        setSearchValue(state, action: PayloadAction<string>){
            state.searchValue = action.payload
        },
    }
});

export const { setCategoryId,setSort,setSearchValue} = filterSlice.actions

export default filterSlice.reducer