import { useParams } from "react-router-dom";

function GenreListShows() {
  const { id } = useParams();

  return <h1>shows {id}</h1>;
}

export default GenreListShows;
