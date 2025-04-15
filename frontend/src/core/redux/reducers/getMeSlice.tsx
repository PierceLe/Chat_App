import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "../../services/contactService";

interface UserStateInterface {
  user: UserData;
}

const initialState: UserStateInterface = {
  user: {
    user_id: "",
    email: "",
    first_name: "",
    last_name: "",
    avatar_url: "",
    is_verified: true,
    use_2fa_login: false,
    two_factor_secret: null
  },
};

const getMeSlice = createSlice({
  name: "getMe",
  initialState,
  reducers: {
    setMe: (state: UserStateInterface, actions: PayloadAction<UserData>) => {
      state.user = actions.payload;
    },
  },
});

export const { setMe } = getMeSlice.actions;

export default getMeSlice;
