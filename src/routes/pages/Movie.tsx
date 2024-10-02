import { movieApi } from "@/services/movieApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
function Movie() {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: [`movie-${id}`],
    queryFn: async () => {
      return await movieApi
        .get(`/${id}`, {
          params: {
            api_key: import.meta.env.VITE_API_KEY,
          },
        })
        .then((response) => response.data);
    },
  });

  return <main> filme {data?.title}</main>;
}

export default Movie;
