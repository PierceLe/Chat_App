import axios from "axios";
import { UserData } from "./contactService";

import httpRequest from "../api/baseAxios";

axios.defaults.withCredentials = true;

export interface MessageData {
  id: string;
  room_id: string;
  message_type: number;
  content: string | null;
  file_url: string | null;
  created_at: Date;
  updated_at: Date;
  sender: UserData;
}

export interface SendMessageData {
  room_id: string;
  content: string | null;
  message_type: number;
  file_url: string | null;
}

export const getAllMessInRoom = async (room_id: string) => {
  try {
    const res = await httpRequest.get("/chat", {
      params: {
        room_id: room_id,
      },
    });
    if (res.status === 200) {
      return res.data["result"];
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getMoreMessInRoom = async (room_id: string, created_at: Date) => {
  try {
    const res = await httpRequest.post("/chat/more", {
      room_id,
      created_at
    });
    if (res.status === 200) {
      return res.data["result"];
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getOnlineUserIds = async () => {
  try {
    const res = await httpRequest.get("/chat/online-user");
    if (res.status === 200) {
      return res.data["result"];
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
