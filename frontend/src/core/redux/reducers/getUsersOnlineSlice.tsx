import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
    usersOnline : new Set<string>()
}


const getUsersOnlineSlice = createSlice({
    name: "getUsersOnline",
    initialState,
    reducers: {
        setUsersOnline: (state: any, actions: PayloadAction<Array<String>>) => {
            state.usersOnline = new Set(actions.payload);
        }
    }
})

export const {setUsersOnline} = getUsersOnlineSlice.actions;

export default getUsersOnlineSlice;