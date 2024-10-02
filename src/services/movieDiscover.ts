import axios from "axios";

const movieDiscover = axios.create({
  baseURL: "https://api.themoviedb.org/3/discover/movie",
});

export { movieDiscover };
