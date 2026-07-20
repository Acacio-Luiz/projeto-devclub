import axios from "axios";

const api = axios.create({
  baseURL: "https://projeto-devclub-wosi-orcin.vercel.app",
});

export default api;