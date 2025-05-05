import axios from "axios";

const httpRequest = axios.create({
  baseURL: "http://localhost:9990",
  withCredentials: true,
});

axios.defaults.withCredentials = true;

export interface RoomData {
  room_id: string;
  room_name: string;
  creator_id: string;
  last_mess: string | null;
  room_type: number;
  avatar_url: string | null;
  description: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface RoomChatOneData extends RoomData {
  friend_id: string;
  friend_email: string;
  friend_frist_name: string;
  friend_last_name: string;
  friend_avatar_url: string;
}

export const createRoom = async (
  room_name: string,
  room_type: number,
  avatar_url: string | null,
  description: string | null,
  member_ids: string[] = [],
) => {
  try {
    const res = await httpRequest.post("/room", {
      room_name,
      room_type,
      avatar_url,
      description,
      member_ids,
    });
    console.log("createRoom: ", res)
    if (res.status === 200) {
      return res.data["result"];
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllGroupChatMany = async (
  room_name: string,
  user_id: string,
  room_type: number = 2,
  page: number = 1,
  size: number = 100,
) => {
  try {
    const res = await httpRequest.post("/room/filter", {
      page: page,
      size: size,
      room_name: room_name,
      room_type: room_type,
      user_id: user_id,
    });
    if (res.status === 200) {
      return res.data["result"]["items"];
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

export const getAllGroupChatOne = async (
  friend_name: string,
  user_id: string,
  page: number = 1,
  size: number = 100,
) => {
  try {
    const res = await httpRequest.post("/room/one/filter", {
      page: page,
      size: size,
      friend_name: friend_name,
      user_id: user_id,
    });
    if (res.status === 200) {
      return res.data["result"]["items"];
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getRoomById = async (room_id: string) => {
  try {
    const res = await httpRequest.get("/room", {params: {room_id: room_id}});
  if (res.status === 200) {
    return res.data["result"];
  }
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const getAllUsersInRoom = async (room_id: string) => {
  try {
    const res = await httpRequest.get("/room/user", {params: {room_id: room_id}});
  if (res.status === 200) {
    return res.data["result"];
  }
  } catch (error) {
    console.log(error);
    return null;
  }
}