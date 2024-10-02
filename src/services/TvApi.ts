import axios from "axios";

const TvApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/tv",
});

export { TvApi};
