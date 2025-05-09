import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
    friend : [],
    send_friend: [],
    received_friend: []
}


const getContactSlice = createSlice({
    name: "getContact",
    initialState,
    reducers: {
        setContact: (state: any, actions: PayloadAction<any>) => {
            state.friend = actions.payload.friend;
            state.send_friend = actions.payload.send_friend;
            state.received_friend = actions.payload.received_friend;
        }
    }
})

export const {setContact} = getContactSlice.actions;

export default getContactSlice;