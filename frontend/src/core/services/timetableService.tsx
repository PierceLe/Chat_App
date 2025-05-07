import axios from "axios";
import httpRequest from "../api/baseAxios";

axios.defaults.withCredentials = true;

export interface TimetableEvent {
  event_id: string;
  user_id: string;
  title: string;
  description: string | null;
  start_time: string;
  end_time: string;
  location: string | null;
  color: string | null;
  is_recurring: boolean;
  recurrence_pattern: string | null;
  created_at: string;
  updated_at: string;
}

export interface CreateEventRequest {
  title: string;
  description?: string;
  start_time: string;
  end_time: string;
  location?: string;
  color?: string;
  is_recurring?: boolean;
  recurrence_pattern?: string;
}

export interface UpdateEventRequest {
  event_id: string;
  title?: string;
  description?: string;
  start_time?: string;
  end_time?: string;
  location?: string;
  color?: string;
  is_recurring?: boolean;
  recurrence_pattern?: string;
}

export interface DateRangeRequest {
  start_date: string;
  end_date: string;
}

export const getAllEvents = async () => {
  try {
    const res = await httpRequest.get("/timetable/all");
    if (res.code === 0) {
      return res.result;
    }
    return [];
  } catch (error) {
    console.error("Error getting all events:", error);
    return [];
  }
};

export const getEventById = async (eventId: string) => {
  try {
    const res = await httpRequest.get(`/timetable/detail/${eventId}`);
    if (res.code === 0) {
      return res.result;
    }
    return null;
  } catch (error) {
    console.error(`Error getting event ${eventId}:`, error);
    return null;
  }
};

export const getEventsByDateRange = async (startDate: Date, endDate: Date) => {
  try {
    const request: DateRangeRequest = {
      start_date: startDate.toISOString(),
      end_date: endDate.toISOString()
    };
    
    const res = await httpRequest.post("/timetable/by-date-range", request);
    if (res.code === 0) {
      return res.result;
    }
    return [];
  } catch (error) {
    console.error("Error getting events by date range:", error);
    return [];
  }
};

export const createEvent = async (event: CreateEventRequest) => {
  try {
    const res = await httpRequest.post("/timetable/create", event);
    if (res.code === 0) {
      return res.result;
    }
    return null;
  } catch (error) {
    console.error("Error creating event:", error);
    return null;
  }
};

export const updateEvent = async (event: UpdateEventRequest) => {
  try {
    const res = await httpRequest.put("/timetable/update", event);
    if (res.code === 0) {
      return res.result;
    }
    return null;
  } catch (error) {
    console.error(`Error updating event ${event.event_id}:`, error);
    return null;
  }
};

export const deleteEvent = async (eventId: string) => {
  try {
    const res = await httpRequest.delete(`/timetable/${eventId}`);
    if (res.code === 0) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error deleting event ${eventId}:`, error);
    return false;
  }
}; 