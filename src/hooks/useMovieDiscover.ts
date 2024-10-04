import { movieDiscover } from "@/services/movieDiscover";
import { useQuery } from "@tanstack/react-query";

interface HookProps {
  key: string;
  genre: string;
  language?: string;
}

function useMovieDiscover({ key, genre, language }: HookProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: [key, genre],
    queryFn: async () => {
      return await movieDiscover
        .get("", {
          params: {
            api_key: import.meta.env.VITE_API_KEY,
            language: language,
            with_genres: genre,
          },
        })
        .then((response) => response.data.results);
    },
  });

  return { data, isLoading, isError };
}

export default useMovieDiscover;
