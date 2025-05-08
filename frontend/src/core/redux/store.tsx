import { configureStore } from "@reduxjs/toolkit";
import createRoomSlice from "./reducers/createRoomSlice";
import commonSlice from "../data/redux/commonSlice";
import getMeSlice from "./reducers/getMeSlice";
import getUsersOnlineSlice from "./reducers/getUsersOnlineSlice";
import getContactSlice from "./reducers/getContactSlice";

const myStore = configureStore({
  reducer: {
    common: commonSlice,
    createRoom: createRoomSlice.reducer,
    getMe: getMeSlice.reducer,
    getUsersOnline: getUsersOnlineSlice.reducer,
    getContact: getContactSlice.reducer,
  },
});

export default myStore;
export type RootState = ReturnType<typeof myStore.getState>;