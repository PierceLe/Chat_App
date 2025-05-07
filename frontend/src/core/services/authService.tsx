import axios, { AxiosResponse } from "axios";
import { UserData } from "./contactService";
import httpRequest, { ApiResponse } from "../api/baseAxios";
import { LoginType, ResponseType } from "@/core/model/responseType";

axios.defaults.withCredentials = true;

export async function login(email: string, password: string): Promise<LoginType> {
  const res: LoginType = await httpRequest.post("/login", {
    email,
    password,
  });

  return res
}

export async function logout(): Promise<void> {
  const res: AxiosResponse = await httpRequest.post("/logout");
  console.log(res);
}

export const getAllFriends = async () => {
  try {
    const res = await httpRequest.get("/friend/all");
    return res.result;
  } catch (error) {
    console.log(error);
  }
};

export const getFriendDrafts = async () => {
  try {
    const res = await httpRequest.get("/friend/friend-draft");
    if (res.code === 0) {
      return res.result;
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

export const getMe = async () => {
  try {
    const res: ApiResponse<UserData> = await httpRequest.post(`/user/me`
    );
    if (res){
      return res.result;
    }
    
  } catch (error) {
    console.log(error);
  }
};
