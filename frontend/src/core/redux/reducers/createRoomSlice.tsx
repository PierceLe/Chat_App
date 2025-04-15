import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  room_name: "",
  room_type: 2,
  avatar_url: "",
  description: "",
  member_ids: [],
};

const createRoomSlice = createSlice({
  name: "createRoom",
  initialState,
  reducers: {
    setRoomName: (state, { payload }) => {
      state.room_name = payload;
    },
    setRoomType: (state, { payload }) => {
      state.room_type = payload;
    },
    setAvatarUrl: (state, { payload }) => {
      state.avatar_url = payload;
    },
    setDescription: (state, { payload }) => {
      state.description = payload;
    },
    setMemberIds: (state, { payload }) => {
      state.member_ids = payload;
    },
  },
});

export default createRoomSlice;
