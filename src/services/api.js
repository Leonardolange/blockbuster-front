import axios from "axios";
import urlPadrao from "./ApiUrl";

const api = axios.create({
  baseURL: {urlPadrao},
  /* baseURL: "https://localhost:7231", */
});

export default api;