import { createSlice } from '@reduxjs/toolkit'
const initialState = { value: false }
export const DetailPopupSlice = createSlice({
    name: 'DetailPopup',
    initialState,
    reducers: {
        showPopup: (state, action) => {
            state.value = true;
        },
        hidePopup: (state, action) => {
            state.value = false;
        }
    }
})
export const { showPopup, hidePopup } = DetailPopupSlice.actions;
export default DetailPopupSlice.reducer;