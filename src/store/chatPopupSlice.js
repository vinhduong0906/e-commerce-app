import { createSlice } from "@reduxjs/toolkit";

const chatPopupSlice = createSlice({
    name: 'chatPopupSlice',
    initialState: { display: false },
    reducers: {
        POPUP_CHAT: (state, action) => {
            state.display = !state.display;
        },

    }
})
export const { POPUP_CHAT } = chatPopupSlice.actions;
export default chatPopupSlice.reducer;