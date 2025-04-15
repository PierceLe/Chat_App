import { StringLiteralLike } from "typescript";

export interface ResponseType {
  code: number;
  message: string;
  error_message: string
}

export interface LoginType {
  code: number,
  error_message: string,
  login_type: string,
  token: string
}

