import { configureStore } from '@reduxjs/toolkit'
import DetailPopupReducer from './DetailPopupSlice'
import loginUserReducer from './authUserSlice';
import cartListReducer from './cartListSlice';
import chatPopupReducer from './chatPopupSlice';
export const store = configureStore({ reducer: { detailPopup: DetailPopupReducer, loginUser: loginUserReducer, cartList: cartListReducer, chatPopup: chatPopupReducer } })