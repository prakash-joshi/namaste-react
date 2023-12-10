import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItemTocart: (state, action) => {
            state.items.push(action.payload);
        },
        removeItemsFromCart: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
    }
})

export const { addItemTocart, removeItemsFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;