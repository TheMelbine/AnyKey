import {RootState} from "../../store";

export const selectCartTotalPrice = ((state: RootState) => state.cartSlice.keyboards.reduce((acc, curr) => acc += curr.price * curr.count, 0));

export const selectCartTotalCount = ((state: RootState) => state.cartSlice.keyboards.reduce((acc, curr) => acc += curr.count, 0))