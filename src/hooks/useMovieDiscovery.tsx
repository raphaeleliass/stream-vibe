import { movieDiscovery } from "@/services/movieDiscovery";
import { useQuery } from "@tanstack/react-query";

interface HookProps {
  key: string;
  genre: string;
}

function useMovieDiscovery({ key, genre }: HookProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: [key, genre],
    queryFn: async () => {
      return await movieDiscovery
        .get("", {
          params: {
            api_key: import.meta.env.VITE_API_KEY,
            language: "pt-BR",
            with_genres: genre,
          },
        })
        .then((response) => response.data);
    },
    staleTime: 1000 * 60 * 5,
  });

  return { data, isLoading, isError };
}

export default useMovieDiscovery;
