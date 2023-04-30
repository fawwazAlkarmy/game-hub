import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bcadded2fb2a4032818e0d1bb644e60c",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async () => {
    const res = await axiosInstance.get<T>(this.endpoint);
    return res.data;
  };
}

export default APIClient;
