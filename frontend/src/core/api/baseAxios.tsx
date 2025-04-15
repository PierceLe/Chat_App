import axios, { AxiosResponse } from "axios";
import { BASE_API_URL } from "../../environment";

export type ApiResponse<T> = {
  code: number;
  message: string;
  result: T;
};

const httpRequest = axios.create({
  baseURL: BASE_API_URL || "http://localhost:9990",
  withCredentials: true,
  timeout: 3000000 // request timeout,
});

export default httpRequest;