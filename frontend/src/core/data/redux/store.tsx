import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./commonSlice";

const Store = configureStore({
  reducer: commonSlice,
});

export default Store;
