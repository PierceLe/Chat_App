import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
  mobileSidebar: false,
  miniSidebar: false,
  expandMenu: false,
};
const commonSlice = createSlice({
  name: "Dreamchat",
  initialState,
  reducers: {
    setDark: (state, { payload }) => {
      state.darkMode = payload;
    },
    setMobileSidebar: (state, { payload }) => {
      state.mobileSidebar = payload;
    },
    setMiniSidebar: (state, { payload }) => {
      state.miniSidebar = payload;
    },
    setExpandMenu: (state, { payload }) => {
      state.expandMenu = payload;
    },
  },
});

export const { setDark, setMobileSidebar, setMiniSidebar, setExpandMenu } =
  commonSlice.actions;

export default commonSlice.reducer;
