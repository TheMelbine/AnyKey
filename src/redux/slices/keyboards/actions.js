import {createAsyncThunk} from "@reduxjs/toolkit";
import {getKeyboards} from "../../../api/keyboardAPI";

export const fetchKeyboards = createAsyncThunk("keyboards/getAll", async(params) =>{
    return getKeyboards(params)
})

