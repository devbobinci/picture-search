import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ubWhhfMNIS96GGGjOjo-Rq2PsifBm6sbVI1ASvXf_U4",
  },
});
