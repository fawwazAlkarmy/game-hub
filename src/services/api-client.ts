import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bcadded2fb2a4032818e0d1bb644e60c",
  },
});
