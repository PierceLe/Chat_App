import { configureStore } from "@reduxjs/toolkit";
import createRoomSlice from "./reducers/createRoomSlice";
import commonSlice from "../data/redux/commonSlice";
import getMeSlice from "./reducers/getMeSlice";

const myStore = configureStore({
  reducer: {
    common: commonSlice,
    createRoom: createRoomSlice.reducer,
    getMe: getMeSlice.reducer,
  },
});

export default myStore;
export type RootState = ReturnType<typeof myStore.getState>;