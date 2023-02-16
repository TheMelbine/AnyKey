import {createAsyncThunk} from "@reduxjs/toolkit";
import {getKeyboards} from "../../../api/keyboardAPI";

const fetchKeyboards = createAsyncThunk("keyboards/getAll", async(params) =>{
    return getKeyboards(params)
})
export const keyboardsSliceActions = {fetchKeyboards}
