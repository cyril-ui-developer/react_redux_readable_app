import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:5001",
  headers: {
    "Content-Type": "application/json", 'Authorization': 'julyseven2002' 
  }
})