import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ec0f43224b7f4af58a38475c1b4b6af0",
  },
});
