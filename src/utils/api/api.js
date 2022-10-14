import axios from "axios";
import { baseURL } from "./constan";


export const api = axios.create({
  baseUrl: { baseURL },
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",

    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
    "Access-Control-Allow-Credentials": true,
  },
});
