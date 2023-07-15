import { createSlice } from "@reduxjs/toolkit";
const loginUser = JSON.parse(localStorage.getItem('loginUser'));

const initialState = loginUser ? { isLogin: true, name: loginUser.name, email: loginUser.email } : { isLogin: false, name: '', email: '' };
console.log(initialState)
const authUserSlice = createSlice({
    name: 'loginUser',
    initialState,
    reducers: {
        ON_LOGIN: (state, action) => {
            state.isLogin = true;
            state.name = action.payload.userName;
            state.email = action.payload.userEmail;

        },
        ON_LOGOUT: (state, action) => {
            state.isLogin = false;
            state.name = '';
            state.email = '';

        }
    }
})
export const { ON_LOGIN, ON_LOGOUT } = authUserSlice.actions;
export default authUserSlice.reducer;