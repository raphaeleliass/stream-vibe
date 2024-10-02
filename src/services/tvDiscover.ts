import axios from "axios";

const tvDiscover = axios.create({
  baseURL: "https://api.themoviedb.org/3/discover/tv",
});

export { tvDiscover};
