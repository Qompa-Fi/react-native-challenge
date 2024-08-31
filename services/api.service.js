import axios from "axios";
// eslint-disable-next-line import/no-unresolved
import { EXPO_PUBLIC_API_URL } from "@env";

const api = axios.create({
  baseURL: EXPO_PUBLIC_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
