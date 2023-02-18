import {CaseReducer, PayloadAction} from "@reduxjs/toolkit";
import {TCartKeyboard, TCartSlice} from "./types";

const setKeyboards: CaseReducer<TCartSlice, PayloadAction<TCartKeyboard>> = (state, action) => {
    const newKeyboard = action.payload
    if (!state.keyboards.length) {
        state.keyboards = [{...newKeyboard, count: 1}]
    } else {
        const hasSameKeyboard = !!state.keyboards.find(item => item.id === newKeyboard.id && item.types === newKeyboard.types && item.sizes === newKeyboard.sizes)
        if (hasSameKeyboard) {
            state.keyboards = state.keyboards.map(item => item.id === newKeyboard.id && item.types === newKeyboard.types && item.sizes === newKeyboard.sizes ? {
                ...item, count: item.count + 1
            } : item)
        } else {
            state.keyboards.push({...newKeyboard, count: 1})
        }
    }
}

const removeKeyboards: CaseReducer<TCartSlice, PayloadAction<TCartKeyboard>> = (state, action) => {
    const newKeyboard = action.payload
    const hasSameKeyboard = !!state.keyboards.find(item => item.id === newKeyboard.id && item.types === newKeyboard.types && item.sizes === newKeyboard.sizes)

    state.keyboards =state.keyboards.reduce((acc, item:TCartKeyboard) =>{
        if(item.id === newKeyboard.id && item.types === newKeyboard.types && item.sizes === newKeyboard.sizes && item.count > 1){
            acc.push({...item, count: item.count -1})
        } else acc.push(item)

        return acc
    },[])
}


const clearCart: CaseReducer<TCartSlice> = (state) => {
    state.keyboards = []
}

export const cartActions = {
    setKeyboards, removeKeyboards, clearCart
}