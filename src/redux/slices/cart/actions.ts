import {CaseReducer, PayloadAction} from "@reduxjs/toolkit";
import {TCartKeyboard, TCartSlice} from "./types";
import {TKeyboard, TKeyboardShopItem} from "../keyboards/types";

const setKeyboards: CaseReducer<TCartSlice, PayloadAction<TKeyboardShopItem>> = (state, action) => {
    const newKeyboard = action.payload
    if (!state.keyboards.length) {
        state.keyboards = [{...newKeyboard, count: 1}]
    } else {
        const hasSameKeyboard = !!state.keyboards.find(item => item.id === newKeyboard.id && item.activeType === newKeyboard.activeType && item.activeSize === newKeyboard.activeSize)
        if (hasSameKeyboard) {
            state.keyboards = state.keyboards.map(item => item.id === newKeyboard.id && item.activeType === newKeyboard.activeType && item.activeSize === newKeyboard.activeSize ? {
                ...item, count: item.count + 1
            } : item)
        } else {
            state.keyboards.push({...newKeyboard, count: 1})
        }
    }
}

const removeKeyboards: CaseReducer<TCartSlice, PayloadAction<TKeyboardShopItem>> = (state, action) => {
    const newKeyboard = action.payload;
    state.keyboards = state.keyboards.reduce((acc: TCartSlice["keyboards"], item: TCartKeyboard) => {
        if (item.id === newKeyboard.id && item.activeType === newKeyboard.activeType && item.activeSize === newKeyboard.activeSize) {
            if (item.count > 1) {
                acc.push({...item, count: item.count - 1});
                return acc;
            }
        } else {
            acc.push(item);
        }
        return acc;
    }, []);
};


const clearCart: CaseReducer<TCartSlice> = (state) => {
    state.keyboards = []
}

export const cartActions = {
    setKeyboards, removeKeyboards, clearCart
}