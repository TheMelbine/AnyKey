import {createSlice, current} from "@reduxjs/toolkit";
import {value} from "lodash/seq";
import keyboards from "./keyboards";

const initialState = {
    keyboards: [],
    totalCount: 0,
    totalPrice: 0,
}

const cartSlice = createSlice({
        name: 'cart',
        initialState,
        reducers: {
            setKeyboards(state, action) {
                const newKeyboard = action.payload

                console.log(current(state.keyboards).length);
                state.keyboards = state.keyboards.length ? state.keyboards.reduce((acc, item) => {
                    if (item.id === newKeyboard.id && item.types === newKeyboard.types && item.sizes === newKeyboard.sizes) {
                        acc.push({
                            ...item,
                            count: item.count + 1
                        })
                    } else {
                        console.log(current(item))
                        acc.push({...item, count: 1})
                    }

                    return acc
                }, []) : [{...newKeyboard, count: 1}]
            },
            setTotalCount(state, action) {
                state.totalCount = action.payload
            },
            setTotalPrice(state, action) {
                state.totalPrice = action.payload
            }
        }
    })
;

export const {setKeyboards, setTotalCount, setTotalPrice} = cartSlice.actions
export default cartSlice.reducer