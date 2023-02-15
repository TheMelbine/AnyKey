
export const selectCartTotalPrice = (state => state.cartSlice.keyboards.reduce((acc, curr) => acc += curr.price * curr.count, 0));

export const selectCartTotalCount = (state => state.cartSlice.keyboards.reduce((acc, curr) => acc += curr.count, 0))