import axios from "axios";

const httpRequest = axios.create({
  baseURL: "http://localhost:9990",
  withCredentials: true,
});

axios.defaults.withCredentials = true;

export interface UserData {
  user_id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar_url: string;
  is_verified: boolean;
  use_2fa_login?: boolean;
  two_factor_secret?: string | null,
  method?: string | null,
  salt?: string | null,
  pin?: string | null,
  public_key?: string | null,
  encrypted_private_key?: string | null,
  biography?: string | null
}

export const getAllFriends = async () => {
  try {
    const res = await httpRequest.get("/friend/all");
    if (res.status === 200) {
      return res.data["result"];
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getFriendDrafts = async () => {
  try {
    const res = await httpRequest.get("/friend/friend-draft");
    if (res.status === 200) {
      return res.data["result"];
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const acceptFriend = async (user_id: string, is_accept: boolean) => {
  try {
    const res = await httpRequest.post("/friend/accept-friend", {
      user_id,
      is_accept,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const addFriend = async (friend_email: string) => {
  try {
    const res = await httpRequest.post("/friend/add-friend", { friend_email });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const unFriend = async (friend_id: string) => {
  try {
    const res = await httpRequest.post("/friend/unfriend", { friend_id });
    return res;
  } catch (error) {
    console.log(error);
  }
};