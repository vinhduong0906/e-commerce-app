import { createSlice } from "@reduxjs/toolkit";
const cartList = (localStorage.getItem('cartList'));
const loginUser = (localStorage.getItem('loginUser'));

const initialState = loginUser && cartList ? JSON.parse(cartList) : [];
const cartListSlice = createSlice({

    name: 'cartList',
    initialState,
    reducers: {
        USER_LOG_OUT: (state, action) => {
            state.length = 0;
        },
        USER_LOG_IN: (state, action) => {
            return state.concat(action.payload);
        },
        ADD_CART: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('cartList', JSON.stringify(state));
        },
        UPDATE_CART: (state, action) => {
            if (action.payload.onChange) state[action.payload.index].quantity = Number(action.payload.quantity); else
                state[action.payload.index].quantity += Number(action.payload.quantity);
            localStorage.setItem('cartList', JSON.stringify(state));

        },
        DELETE_CART: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload)
            state.splice(index, 1);
            localStorage.setItem('cartList', JSON.stringify(state));

        },
    }
})
export const { ADD_CART,
    UPDATE_CART,
    DELETE_CART, USER_LOG_OUT, USER_LOG_IN } = cartListSlice.actions;
export default cartListSlice.reducer;