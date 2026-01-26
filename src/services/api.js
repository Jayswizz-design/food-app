import axios from "axios";

const API = axios.create({
  baseURL: "https://your-backend-url.com/api",
});

export const fetchOrders = () => API.get("/orders");
export const fetchMenu = () => API.get("/menu");
export const createOrder = (data) => API.post("/orders", data);
