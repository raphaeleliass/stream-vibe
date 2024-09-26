import axios from "axios";

const movieDiscovery = axios.create({
  baseURL: "https://api.themoviedb.org/3/discover/movie",
});

export { movieDiscovery };
