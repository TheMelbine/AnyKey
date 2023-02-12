import {createAsyncThunk} from "@reduxjs/toolkit";
import {getKeyboards} from "../../../api/keyboardAPI";

export const fetchKeyboards = createAsyncThunk("keyboards/getAll", async(params) =>{
    const response = await getKeyboards(params)
    return response;


})

