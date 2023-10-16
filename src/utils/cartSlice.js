import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: {},
        totalPrice: 0,
    },
    reducers: {
        addItem: (state, action) => {
            // const idx = state.items.find(item => item?.card?.info?.id === action.payload.card?.info?.id);
            // if (idx) {
            //     console.log(idx);
            //     state.items[idx].quantity++;
            // } else {
            //     action.payload.quantity = 1;
            //     state.items.push(action.payload);
            // }
            if (state.items["cartItems" + action.payload.card.info.id]) {
                state.items["cartItems" + action.payload.card.info.id].quantity++;
            } else {
                state.items["cartItems" + action.payload.card.info.id] = action.payload
                state.items["cartItems" + action.payload.card.info.id].quantity = 1;
            }
            // if (state.items.find(item => item[0]?.card?.info?.id === action.payload.card?.info?.id)) {
            //     const idx = state.items.findIndex(item => item[0].card.info.id === action.payload.card.info.id);
            //     state.items[idx][1]++;
            // } else {
            //     state.items.push([action.payload,1]);
            // }
        },
        removeItem: (state, action) => {
            delete state.items["cartItems" + action.payload.card.info.id];
        },
        increaseItem: (state, action) => {
            state.items["cartItems" + action.payload.card.info.id].quantity++;
        },
        decreaseItem: (state, action) => {
            if (state.items["cartItems" + action.payload.card.info.id].quantity === 0) {
                delete state.items["cartItems" + action.payload.card.info.id];
            } else {
                state.items["cartItems" + action.payload.card.info.id].quantity--;
            }
        },
        clearCart: (state) => {
            Object.keys(state.items).length = 0;
        },
    },
});

export const { addItem, increaseItem, decreaseItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;