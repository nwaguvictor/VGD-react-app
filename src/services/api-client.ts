import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a4d3514320ce43a694cabe0e10ff2dfe",
  },
});

export default apiClient;
