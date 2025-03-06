import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark: true,
  showSideBar: true,
  showDetails: true,
  cardMode:true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.dark =!state.dark;
    },
    toggleSideBar(state) {
      state.showSideBar =!state.showSideBar;
    },
    toggleCardMode(state) {
      state.cardMode =!state.cardMode;
    }
  }
});

export const { toggleDarkMode, toggleSideBar, toggleCardMode } = appSlice.actions;
export default appSlice.reducer;