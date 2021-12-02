import axios from "axios";

const api = axios.create({
  baseURL: "https://teste2-pacheco.herokuapp.com/api"
});

export default api;