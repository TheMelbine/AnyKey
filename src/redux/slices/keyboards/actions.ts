import {createAsyncThunk} from "@reduxjs/toolkit";
import {getKeyboards} from "../../../api/keyboardAPI";
import {TParams} from "../../../components/Category/types";

const fetchKeyboards = createAsyncThunk("keyboards/getAll", async(params: TParams) =>{
    return getKeyboards(params)
})
export const keyboardsSliceActions = {fetchKeyboards}
