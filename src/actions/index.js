import axios from "axios";
export * from "./categories";
export * from "./posts";
export * from "./comments";

export const client = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json", 'Authorization': 'julyseven2002' 
  }
})