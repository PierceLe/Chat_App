import { createSlice } from "@reduxjs/toolkit";

// Check if localStorage has a darkMode value, otherwise default to false
const getInitialDarkMode = () => {
  const savedMode = localStorage.getItem("darkMode");
  return savedMode === "enabled";
};

const initialState = {
  darkMode: getInitialDarkMode(),
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
      // Synchronize with localStorage
      localStorage.setItem("darkMode", payload ? "enabled" : "disabled");
      // Apply or remove darkmode class on body
      if (payload) {
        document.body.classList.add("darkmode");
      } else {
        document.body.classList.remove("darkmode");
      }
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
